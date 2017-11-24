import { environment } from '../../../environments/environment';

export class API {
    private AUTH = 'oauth/';
    private OPENSHIFT = 'oapi/v1/';
    private KUBERNETES = 'apis/v1/';

    // GET
    public REQUEST_TOKEN = environment.clusterURL + this.AUTH + 'token/request';
    public REQUEST_PROJECTS = environment.clusterURL + this.OPENSHIFT + 'projects';
    public REQUEST_TEMPLATE = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/templates/$NAME';
    public REQUEST_ROUTES = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/routes/$NAME';

    // POST
    public CREATE_PROJECT = environment.clusterURL + this.OPENSHIFT + 'projectrequests';
    public PROCESS_TEMPLATE = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/processedtemplates';
    public CREATE_BUILDCONFIG = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/buildconfigs';
    public CREATE_IMAGESTREAM = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/imagestreams';
    public CREATE_DEPLOYMENTCONFIG = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/deploymentconfigs';
    public CREATE_ROUTE = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/routes';
    public CREATE_SERVICE = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/services';
    public CREATE_SECRET = environment.clusterURL + this.KUBERNETES + 'namespace/$NAMESPACE/secrets';
    public BUILD_APP = environment.clusterURL + this.OPENSHIFT + 'namespace/$NAMESPACE/buildconfigs/$NAME/instantiate';

    // PATCH
    public PATCH_SERVICEACCOUNT = environment.clusterURL + this.KUBERNETES + 'namespace/$NAMESPACE/serviceaccounts/$NAME';
    public PATCH_BUILDCONFIG = environment.clusterURL + this.KUBERNETES + 'namespace/$NAMESPACE/buildconfigs/$NAME';

    constructor() {}

}