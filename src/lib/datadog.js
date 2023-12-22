import { datadogRum } from '@datadog/browser-rum';

export function DatadogRum(){
    datadogRum.init({
    applicationId: '01cb812c-7787-4ad9-9bfb-d998d3c00b67',
    clientToken: 'pub426b8948997e7387f0945b86de207eca',
    site: 'datadoghq.com',
    service: 'pdrace',
    env: 'development',
    version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
    });
}