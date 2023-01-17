#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
const stackName = app.node.tryGetContext('stack_name') || 'next-ts-amplify-hosting-stack';
const appName = app.node.tryGetContext('app_name') || 'AmplifyApp';
new CdkStack(app, stackName, {
  appName
});
