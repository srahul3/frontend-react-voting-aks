[![Use this template](https://github.com/stack-instance/badge.svg)](https://github.com/stack-instance?stack_template_owner=srahul3&stack_template_repo=aks-acs-ingress-setup)

<p>
    <img src="https://code.benco.io/icon-collection/azure-docs/kubernetes-services.svg" alt="AKS" width="50" height ="50"/>
    <img src="https://code.benco.io/icon-collection/azure-docs/container-registry.svg" alt="ACS" width="50" height ="50"/>
    <img src="https://github.com/kubernetes/community/blob/master/icons/svg/resources/labeled/ing.svg" alt="Kubernetes Ingress Controller" width="50" height ="50"/>
</p>

 <p>    
    <img src="https://avatars.githubusercontent.com/u/6844498?s=200&v=4" height="20">
    <b>Use this stack</b> to spin up a react frontend of sample voting application on Azure Kubernetes Service (AKS) cluster.  
</p>

 <p>
    <b>The stack will create and configure:</b>
    
      1) A containter image of this application
      2) Two replica-set of the application
      2) Loadbalancer service to access the replica-set   
      3) Configure the paths in ingress controller to access the application using DNS name    
</p>

## Dependencies

[![Use this template](https://github.com/stack-instance/badge.svg)](https://github.com/stack-instance?stack_template_owner=srahul3&stack_template_repo=aks-acs-ingress-setup) The stack will help you to setup the AKS custer for this application.

[![Use this template](https://github.com/stack-instance/badge.svg)](https://github.com/stack-instance?stack_template_owner=srahul3&stack_template_repo=backend-express-voting-mongo-aks) The stack will help you to configure and deploy the backend application/ The application is based on NodeJS express.


## Why should you use this stack?
The stack will configures the demo voting ReactJS application and it code along with CI/CD pipeline to deploy it on AKS cluster. It also congigure the Loadbalancer service and Ingress application to access this application.

## What are the inputs to pass while setting up the stack?
<b>OIDC Auth inputs
  
```
- AZURE_CLIENT_ID
- AZURE_SUBSCRIPTION_ID
- AZURE_TENANT_ID
```
<b>ACR setup inputs
```
- ACR_NAME
- ACR_RESOURCE_GROUP
```
<b>AKS configuration inputs
```
AKS_KUBECONFIG
AZURE_AKS_NAME
AZURE_AKS_RESOURCE_GROUP
```
<b>Other inputs
```
- BACKEND_URL
- DNS_NAME
- AZURE_LOCATION
```

  
#### Github apps installed with this stack
```
None
```

## Learn more 

### Azure Kubernetes Service (AKS)
Learn more about AKS from the official tutorial.
Visit [https://azure.microsoft.com/en-in/services/kubernetes-service/#overview](https://azure.microsoft.com/en-in/services/kubernetes-service/#overview) to view the full documentation.
  
### React JS
Learn more about React JS from the official tutorial.
Visit [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html) to view the full documentation.

## Other Useful links

#### Contributor guide
Please see our guide lines for [contributing.md](/.github/stacks/contributing.md).

## Contributors 
- Rahul Sharma ([@srahul3](https://twitter.com/srahul3))

## License
Unless otherwise noted, this GitHub Stack is distributed under the Apache Version 2.0 license found in the LICENSE file.
