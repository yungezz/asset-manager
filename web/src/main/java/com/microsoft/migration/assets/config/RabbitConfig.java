package com.microsoft.migration.assets.config;

import com.azure.core.credential.TokenCredential;
import com.azure.core.exception.ResourceExistsException;
import com.azure.core.exception.ResourceNotFoundException;
import com.azure.messaging.servicebus.administration.ServiceBusAdministrationClient;
import com.azure.messaging.servicebus.administration.ServiceBusAdministrationClientBuilder;
import com.azure.messaging.servicebus.administration.models.CreateQueueOptions;
import com.azure.messaging.servicebus.administration.models.QueueProperties;
import com.azure.spring.cloud.autoconfigure.implementation.servicebus.properties.AzureServiceBusProperties;
import com.azure.spring.messaging.ConsumerIdentifier;
import com.azure.spring.messaging.PropertiesSupplier;
import com.azure.spring.messaging.servicebus.core.properties.ProcessorProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Configuration
public class RabbitConfig {
    public static final String IMAGE_PROCESSING_QUEUE = "image-processing";
    public static final String RETRY_QUEUE = "retry-queue";
    public static final Duration RETRY_QUEUE_TTL = Duration.ofMinutes(1);

    @Bean
    public ServiceBusAdministrationClient adminClient(AzureServiceBusProperties properties, TokenCredential credential) {
        return new ServiceBusAdministrationClientBuilder()
            .credential(properties.getFullyQualifiedNamespace(), credential)
            .buildClient();
    }

    @Bean
    public QueueProperties retryQueue(ServiceBusAdministrationClient adminClient) {
        try {
            return adminClient.getQueue(RETRY_QUEUE);
        } catch (ResourceNotFoundException e) {
            try {
                CreateQueueOptions options = new CreateQueueOptions()
                    .setDefaultMessageTimeToLive(RETRY_QUEUE_TTL)
                    .setDeadLetteringOnMessageExpiration(true);
                return adminClient.createQueue(RETRY_QUEUE, options);
            } catch (ResourceExistsException ex) {
                // Queue was created by another instance in the meantime
                return adminClient.getQueue(RETRY_QUEUE);
            }
        }
    }

    @Bean
    public QueueProperties imageProcessingQueue(ServiceBusAdministrationClient adminClient, QueueProperties retryQueue) {
        QueueProperties queue;
        try {
            queue = adminClient.getQueue(IMAGE_PROCESSING_QUEUE);
        } catch (ResourceNotFoundException e) {
            try {
                CreateQueueOptions options = new CreateQueueOptions()
                    .setForwardDeadLetteredMessagesTo(RETRY_QUEUE);
                queue = adminClient.createQueue(IMAGE_PROCESSING_QUEUE, options);
            } catch (ResourceExistsException ex) {
                // Queue was created by another instance in the meantime
                queue = adminClient.getQueue(IMAGE_PROCESSING_QUEUE);
            }
        }
        
        // Configure retry queue's DLQ forwarding now that image processing queue exists
        try {
            retryQueue.setForwardDeadLetteredMessagesTo(IMAGE_PROCESSING_QUEUE);
            adminClient.updateQueue(retryQueue);
        } catch (Exception ex) {
            // Ignore update errors since basic functionality will still work
        }
        
        return queue;
    }

    @Bean
    public PropertiesSupplier<ConsumerIdentifier, ProcessorProperties> propertiesSupplier() {
        return identifier -> {
            ProcessorProperties processorProperties = new ProcessorProperties();
            processorProperties.setAutoComplete(false);
            return processorProperties;
        };
    }
}
