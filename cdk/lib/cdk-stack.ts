import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as assets from 'aws-cdk-lib/aws-s3-assets';
import * as amplify from '@aws-cdk/aws-amplify-alpha';

interface CdkStackProps extends cdk.StackProps {
  appName: string;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkStackProps) {
    // rome-ignore lint/correctness/noInvalidConstructorSuper: <explanation>
    super(scope, id, props);

    const { appName } = props;

    const asset = new assets.Asset(this, 'Asset', {
      path: '../out',
    });

    const amplifyApp = new amplify.App(this, 'AmplifyApp', {
      appName,
    });

    const main = amplifyApp.addBranch('main', {
      asset: asset,
    });

    new cdk.CfnOutput(this, 'AmplifyAppURL', {
      value: `https://${main.branchName}.${amplifyApp.appId}.amplifyapp.com`,
    });
  }
}
