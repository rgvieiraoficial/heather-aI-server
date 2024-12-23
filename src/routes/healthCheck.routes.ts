import { HelloWorldEventModule } from '../modules/hello/useCases/helloWorldEvent/helloWorldEvent.module';
export const healthCheckModules = [
  HelloWorldEventModule
]

export const healthCheckRoutes = [
  {
    path: '/health-check',
    module: HelloWorldEventModule
  }
];