# sca-final-project

## Description
Using cloudformation to create an aws ec2 instance, deploy a mini app with ansible (a configuration management tool) and circleci

## Steps:

- Use cloudformation to create an ec2 instance on AWS by running the aws-instance.yml file with the command below:
aws cloudformation deploy --stack-name sca --template-file aws-instance.yml --region us-east-1





Ansible enables host key checking by default. Checking host keys guards against server spoofing and man-in-the-middle attacks, but we dont need to check host because it's a known host.