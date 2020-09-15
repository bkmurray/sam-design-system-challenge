import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SidenavService } from '@gsa-sam/sam-ui-elements';
import { SidenavHelper } from '../../../../app-utils/sidenav-helper';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entity-display',
  templateUrl: './entity-display.component.html',
  styleUrls: ['./entity-display.component.css']
})
export class EntityDisplayComponent implements OnInit {

  selectedPage: number = 1;
  sidenavModel = {
    'label': 'Entity',
    'children': []
  };
  sideNavSelection;
  sideNavContent: any;
  pageRoute: string;
  recordId: any;
  summaryData: any;
  businessInformation: any;
  url: string;
  taxpayerInformation: any;
  executiveCompensationQuestions: any;
  executiveCompensationDetails = [];
  executiveItems : any;
  proceedingsQuestions:any;
  proceedingsDetails = [];
  proceedingItems :any ;
  hasTaxpayerAddress: boolean = false;
  entityTypes: any;
  pointsOfContact: any;
  securityInformation: any;
  coreData: any;
  qParams: any = {};
  financialInformation: any;
  entityHistoricalRecords: any;
  selectedEntityVersion: any;
  @ViewChild('alertModal', { static: false }) alertModal;
  alertModalConfig: any = {
  	title: 'What is Debt Subject to Offset?',
  	message: 'If you are a contracting officer, a value of "Yes" indicates that you cannot use a governmentwide commercial purchase card to pay this entity for contracts/orders above the micro-purchase threshold as outlined in FAR 32.1108(b)(2). It does not indicate that you cannot pay the entity using Electronic Funds Transfer.'
  };

  constructor(
    private titleService: Title,
    private sidenavHelper: SidenavHelper,
    private sidenavService: SidenavService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.loadCoreData();
    this.sidenavService.updateData(this.selectedPage, 0);
    this.setTitle();
    this.loadSideNav();
    this.qParams = this.route.queryParams['_value'];
  }

  ngAfterViewInit() {
    let fragment = window.location.hash;
    if (fragment) {
      let url = this.location.path().substring(1) + fragment;
      this.sidenavPathEvtHandler(url);
    }
  }

  setTitle() {
    this.titleService.setTitle('beta.SAM.gov | Entity');
  }

  sidenavPathEvtHandler(data) {
    if (data === 'entity/' + this.recordId) {
      data = 'entity/' + this.recordId + '/coreData';
      this.sidenavService.updateData(1, 0);
    } else if (data === 'entity/' + this.recordId + '/SCR') {
      this.sidenavService.updateData(2, 0);
      this.sidenavHelper.entitySidenavPathEvtHandler(this, data, this.qParams);
    } else {
      this.sidenavHelper.entitySidenavPathEvtHandler(this, data, this.qParams);
    }
  }

  selectedItem(item) {
    let elementId = item.route.replace('#', '');
    if (elementId.includes('entity/') || elementId === '/coreData' || elementId === '/assertions' || elementId === '/repsAndCerts') {
      document.getElementById('entity-name').focus();
    } else {
      document.getElementById(elementId).focus();
    }
    this.selectedPage = this.sidenavService.getData()[0];
  }

  getSideNavConfig(sideNavContent) {
    let config = [{
      'label': 'Entity Registration',
      'route': this.pageRoute,
      'children': [
        {
          'label': 'Core Data',
          'field': '/coreData',
          'children': this.getSideNavSubSections(sideNavContent.coreData)
        },
        {
          'label': 'Assertions',
          'field': '/assertions',
          'children': []
        },
        {
          'label': 'Reps and Certs',
          'field': '/repsAndCerts',
          'children': []
        }
      ]
    },
    {
      'label': 'Exclusions',
      'route': this.pageRoute + '/exclusionInfo',
      'children': []
    },
    {
      'label': 'Integrity Information',
      'route': this.pageRoute + '/integrityInformation',
      'children': []
    }];
    if (this.summaryData.scrAccessFlag === 'true' || this.summaryData.bioPrefAccessFlag === 'true') {
      config.push({
        'label': 'Compliance Reports',
        'route': this.pageRoute + '/SCR',
        'children': []
      });
    }
    return config;
  }

  getSideNavSubSections(section) {
    let subSections = [];
    for (let key in section) {
      let label = section[key];
      let route = '#' + section[key].replace(/\s/g, '-').toLowerCase();
      subSections.push({ label, route });
    }
    return subSections;
  }

  loadSideNav() {
    this.pageRoute = 'entity/' + this.recordId;
    let sideNavConfig = this.getSideNavConfig(this.sideNavContent);
    this.sidenavHelper.updateEntitySideNav(this, sideNavConfig);
    this.sidenavService.updateData(this.selectedPage, 0);
  }

  loadCoreData() {
    this.route.queryParams.subscribe(queryParams => {
      this.qParams = this.route.queryParams['_value'];
      if (JSON.stringify(this.route.snapshot.data['coreData']) !== '{}') {
        this.sideNavContent = this.route.snapshot.data['coreData']['sideNavigationInfo'];
        this.summaryData = this.route.snapshot.data['coreData']['summary'];
        this.recordId = this.route.snapshot.data['coreData']['summary']['duns'];
        this.businessInformation = this.route.snapshot.data['coreData']['coreData']['businessInformation'];
        this.url = this.getUrl(this.businessInformation['url']);
        this.financialInformation = this.route.snapshot.data['coreData']['coreData']['financialInformation'];
        this.taxpayerInformation = this.route.snapshot.data['coreData']['coreData']['taxpayerInformation'];
        if (this.route.snapshot.data['coreData']['coreData'].hasOwnProperty('taxpayerInformation')) {
          this.hasTaxpayerAddress = this.getHasTaxpayerAddress(this.route.snapshot.data['coreData']['coreData']['taxpayerInformation']['tinConsentAddress']);
        }
        this.entityTypes = this.route.snapshot.data['coreData']['coreData']['entityTypes'];
        this.executiveCompensationQuestions = this.route.snapshot.data['coreData']['coreData']['executiveCompensationQuestions'];
        this.executiveCompensationDetails = this.route.snapshot.data['coreData']['coreData']['executiveCompensationDetails'];
        this.proceedingsQuestions = this.route.snapshot.data['coreData']['coreData']['proceedingsQuestions'];
        this.proceedingsDetails = this.route.snapshot.data['coreData']['coreData']['proceedingsDetails'];
        this.pointsOfContact = this.route.snapshot.data['coreData']['coreData']['pointOfContact'];
        this.securityInformation = this.route.snapshot.data['coreData']['coreData']['securityInformation'];
        this.coreData = this.route.snapshot.data['coreData']['coreData'];
        this.entityHistoricalRecords = this.route.snapshot.data['coreData']['entityHistoricalRecords'];
      }
    });
  }

  getHasTaxpayerAddress(address) {
    if (address != null) {
      if (address.address1 != null || address.address2 != null
        || address.addressCity != null || address.addressState != null
        || address.addressZip != null || address.addressZipPlus4 != null
        || address.country != null) {
        return true;
      }
    }
  }

  getUrl(url) {
    if (url != null) {
      if (url.indexOf('http') === -1) {
        url = 'http://' + url;
      }
    }
    return url;
  }

  receiveSelectedVersion($event) {
    this.selectedEntityVersion = $event;
  }

}
