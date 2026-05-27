/* ===================================================
   TowerAI – Application JavaScript
   Telecom Tower SR Automation Platform
   =================================================== */

'use strict';

// ===================================================
// MOCK DATA
// ===================================================
let MOCK_EMAILS = [
  {
    id: 'E001',
    from: 'noc-infra@jio.com',
    sender: 'Jio NOC Team',
    operator: 'Jio',
    subject: '[SP] New Site SP Request – MH-MUM-0234 | Malad West',
    time: '2026-05-26 09:14',
    priority: 'high',
    unread: true,
    body: `Dear Tower Co Team,

We request creation of a new Service Plan (SP) for the following site:

Site ID        : MH-MUM-0234
Tower Code     : JIO-MUM-GF-2234
Circle         : Maharashtra – Mumbai
Site Type      : Ground Mounted Tower (GMT)
Tower Height   : 42 meters
Tenant Count   : 1 (Initial)
Power Source   : EB + DG (Dual)
Earthing Type  : IS 3043
Latitude       : 19.1876° N
Longitude      : 72.8487° E
State          : Maharashtra
District       : Mumbai Suburban
Pincode        : 400064
RoW Status     : Approved
Permission Ref : MCGM/2026/ROW/4521

Contact: Priya Sharma | priya.s@jio.com | +91-98205-XXXXX

SLA Reference  : P1 – 4 Hours
Raised By      : NOC Operations Desk
Ticket Ref     : JIO-NOC-2026-05-4521

Regards,
Jio Infrastructure Team`,
    extracted: {
      siteId: { val: 'MH-MUM-0234', conf: 99 },
      towerCode: { val: 'JIO-MUM-GF-2234', conf: 98 },
      circle: { val: 'Maharashtra – Mumbai', conf: 97 },
      operator: { val: 'Jio', conf: 99 },
      siteType: { val: 'Ground Mounted Tower (GMT)', conf: 96 },
      towerHeight: { val: '42 meters', conf: 98 },
      powerSource: { val: 'EB + DG (Dual)', conf: 95 },
      earthing: { val: 'IS 3043', conf: 94 },
      latitude: { val: '19.1876° N', conf: 99 },
      longitude: { val: '72.8487° E', conf: 99 },
      slaClass: { val: 'P1 – 4 Hours', conf: 98 },
      requestType: { val: 'SP Creation', conf: 97 }
    },
    srType: 'SP'
  },
  {
    id: 'E002',
    from: 'infra-ops@bhartiairtel.com',
    sender: 'Airtel Infra Ops',
    operator: 'Airtel',
    subject: 'Service Order Ingest Request – SO#AIR-2026-78901 | Pune Circle',
    time: '2026-05-26 08:47',
    priority: 'high',
    unread: true,
    body: `Hi,

Please ingest the attached service order into the provisioning system.

SO Number      : AIR-2026-78901
SR Reference   : AIR-SR-0945
Site ID        : MH-PUN-0891
Circle         : Maharashtra – Pune
Tenant Info    : Airtel 4G – Sector A
Antenna Config : 3-Sector / 18 TRX
Power Budget   : 7.5 kW
BTS Type       : Ericsson AIR6488
Installation   : Tower Top
Planned GoLive : 2026-06-10

Attachments: SO_AIR-2026-78901.pdf

SLA            : P2 – 8 Hours
Raised By      : Airtel OSS Team

Regards,
Airtel Infrastructure Operations`,
    extracted: {
      soNumber: { val: 'AIR-2026-78901', conf: 99 },
      siteId: { val: 'MH-PUN-0891', conf: 98 },
      circle: { val: 'Maharashtra – Pune', conf: 97 },
      operator: { val: 'Airtel', conf: 99 },
      tenantInfo: { val: 'Airtel 4G – Sector A', conf: 96 },
      btsType: { val: 'Ericsson AIR6488', conf: 95 },
      plannedGoLive: { val: '2026-06-10', conf: 98 },
      slaClass: { val: 'P2 – 8 Hours', conf: 97 },
      requestType: { val: 'SO Ingest', conf: 99 }
    },
    srType: 'SO'
  },
  {
    id: 'E003',
    from: 'noc-ops@vi.in',
    sender: 'Vi Network Operations',
    operator: 'Vi',
    subject: '[SR] New Site Request – MH-NGP-0134 | Nagpur West',
    time: '2026-05-26 08:15',
    priority: 'high',
    unread: true,
    body: `Dear Tower Co Team,
    
We request creation of a new Service Request (SR) for the following site:

Site ID        : MH-NGP-0134
Circle         : Maharashtra – Nagpur
Operator       : Vi
Site Type      : Ground Mounted Tower (GMT)
Tower Height   : 36 meters
Tenant Count   : 1
Power Source   : EB + DG (15 kVA)
Latitude       : 21.1458° N
Longitude      : 79.0882° E
State          : Maharashtra

SLA: P2 – 8 Hours
Regards,
Vi Network Operations`,
    extracted: {
      siteId: { val: 'MH-NGP-0134', conf: 99 },
      circle: { val: 'Maharashtra – Nagpur', conf: 97 },
      operator: { val: 'Vi', conf: 99 },
      siteType: { val: 'Ground Mounted Tower (GMT)', conf: 95 },
      towerHeight: { val: '36 meters', conf: 96 },
      requestType: { val: 'SR Intake', conf: 98 }
    },
    srType: 'SR'
  },
  {
    id: 'E004',
    from: 'tower-ops@bsnl.co.in',
    sender: 'BSNL Tower Operations',
    operator: 'BSNL',
    subject: '[SR Intake] New Site Request – DL-DEL-0045 | Connaught Place',
    time: '2026-05-26 07:52',
    priority: 'high',
    unread: true,
    body: `Greetings,

This is a request for a new tower Service Request (SR) for our site:

Site ID        : DL-DEL-0045
Tower Code     : BSNL-DEL-RT-0045
Circle         : Delhi
Site Type      : Rooftop Tower (RoT)
Antenna Height : 15 meters
Tenant Count   : 2
Power Source   : EB only
Latitude       : 28.6315° N
Longitude      : 77.2194° E

SLA: P1 – 4 Hours
Regards, BSNL Ops`,
    extracted: {
      siteId: { val: 'DL-DEL-0045', conf: 98 },
      towerCode: { val: 'BSNL-DEL-RT-0045', conf: 96 },
      circle: { val: 'Delhi', conf: 99 },
      operator: { val: 'BSNL', conf: 99 },
      siteType: { val: 'Rooftop Tower (RoT)', conf: 97 },
      requestType: { val: 'SR Intake', conf: 99 }
    },
    srType: 'SR'
  },
  {
    id: 'E005',
    from: 'noc@jio.com',
    sender: 'Jio NOC Desk',
    operator: 'Jio',
    subject: 'Service Order Ingest – SO#JIO-SO-2026-6612 | Ahmedabad',
    time: '2026-05-25 18:30',
    priority: 'high',
    unread: true,
    body: `Hi Team,

Please ingest this Service Order:

SO Number      : JIO-SO-2026-6612
Site ID        : GJ-AHM-0312
Circle         : Gujarat – Ahmedabad
Sharing Config : 3-tenant (Jio + Airtel + Vi)

SLA: P2 – 8 Hours
Regards, Jio NOC`,
    extracted: {
      soNumber: { val: 'JIO-SO-2026-6612', conf: 98 },
      siteId: { val: 'GJ-AHM-0312', conf: 99 },
      circle: { val: 'Gujarat – Ahmedabad', conf: 97 },
      operator: { val: 'Jio', conf: 99 },
      requestType: { val: 'SO Ingest', conf: 96 }
    },
    srType: 'SO'
  }
];

let MOCK_SRS = [
  { id: 'SR-2026-0891', type: 'SP', operator: 'Jio',    site: 'MH-MUM-0234', circle: 'Mumbai',    status: 'new',         slaHours: 4,  elapsed: 1.2,  priority: 'high' },
  { id: 'SR-2026-0890', type: 'SO', operator: 'Airtel', site: 'MH-PUN-0891', circle: 'Pune',      status: 'in-progress', slaHours: 8,  elapsed: 3.5,  priority: 'high' },
  { id: 'SR-2026-0889', type: 'SP', operator: 'BSNL',   site: 'DL-DEL-0045', circle: 'Delhi',     status: 'new',         slaHours: 4,  elapsed: 4.8,  priority: 'high' },
  { id: 'SR-2026-0888', type: 'RFI',operator: 'Vi',     site: 'MH-NGP-0134', circle: 'Nagpur',    status: 'pending-info',slaHours: 8,  elapsed: 7.1,  priority: 'medium' },
  { id: 'SR-2026-0887', type: 'SO', operator: 'Jio',    site: 'GJ-AHM-0312', circle: 'Ahmedabad', status: 'in-progress', slaHours: 8,  elapsed: 2.8,  priority: 'medium' },
  { id: 'SR-2026-0886', type: 'SP', operator: 'Vi',     site: 'KA-BLR-0567', circle: 'Bengaluru', status: 'pending-info',slaHours: 8,  elapsed: 5.4,  priority: 'medium' },
  { id: 'SR-2026-0885', type: 'SO', operator: 'Airtel', site: 'TN-CHN-0234', circle: 'Chennai',   status: 'complete',    slaHours: 8,  elapsed: 6.2,  priority: 'low' },
  { id: 'SR-2026-0884', type: 'SP', operator: 'Jio',    site: 'RJ-JPR-0112', circle: 'Jaipur',    status: 'complete',    slaHours: 4,  elapsed: 3.8,  priority: 'medium' },
  { id: 'SR-2026-0883', type: 'RFI',operator: 'BSNL',   site: 'UP-LKO-0078', circle: 'Lucknow',   status: 'complete',    slaHours: 8,  elapsed: 7.5,  priority: 'low' },
];

let MOCK_SO_LIST = [
  { soNum: 'AIR-2026-78901', srRef: 'SR-2026-0890', site: 'MH-PUN-0891', operator: 'Airtel', circle: 'Pune', bts: 'Ericsson AIR6488', goLive: '2026-06-10', status: 'processing', progress: 65 },
  { soNum: 'JIO-SO-2026-6612', srRef: 'SR-2026-0887', site: 'GJ-AHM-0312', operator: 'Jio', circle: 'Ahmedabad', bts: 'Nokia AirScale', goLive: '2026-06-15', status: 'processing', progress: 40 },
  { soNum: 'VI-SO-2026-3301', srRef: 'SR-2026-0882', site: 'WB-KOL-0201', operator: 'Vi', circle: 'Kolkata', bts: 'Huawei AAU5613', goLive: '2026-06-20', status: 'pending', progress: 10 },
  { soNum: 'JIO-SO-2026-6490', srRef: 'SR-2026-0884', site: 'RJ-JPR-0112', operator: 'Jio', circle: 'Jaipur', bts: 'Ericsson RRUS', goLive: '2026-05-28', status: 'complete', progress: 100 },
  { soNum: 'AIR-2026-77812', srRef: 'SR-2026-0885', site: 'TN-CHN-0234', operator: 'Airtel', circle: 'Chennai', bts: 'Nokia AEQF', goLive: '2026-05-25', status: 'complete', progress: 100 },
  { soNum: 'BSNL-SO-2026-1102', srRef: 'SR-2026-0879', site: 'PB-LDH-0056', operator: 'BSNL', circle: 'Ludhiana', bts: 'ZTE AAU', goLive: '2026-06-30', status: 'failed', progress: 25 }
];

let MOCK_RFI_LIST = [
  { rfiNum: 'RFI-2026-0089', siteId: 'MH-MUM-0234', operator: 'Jio',    circle: 'Mumbai',    erectedType: 'GMT 42m', completionDate: '2026-05-25', powerSupply: 'EB 15kW Grid Live', structuralAudit: 'Certified', status: 'ready', equipmentStatus: 'awaiting', progress: 85 },
  { rfiNum: 'RFI-2026-0088', siteId: 'MH-PUN-0891', operator: 'Airtel', circle: 'Pune',      erectedType: 'GMT 40m', completionDate: '2026-05-24', powerSupply: 'EB + DG Live',     structuralAudit: 'Certified', status: 'ready', equipmentStatus: 'installing', progress: 95 },
  { rfiNum: 'RFI-2026-0087', siteId: 'DL-DEL-0045', operator: 'BSNL',   circle: 'Delhi',     erectedType: 'RoT 15m', completionDate: '2026-05-23', powerSupply: 'EB Connection Live', structuralAudit: 'Certified', status: 'complete',equipmentStatus: 'installed', progress: 100 },
  { rfiNum: 'RFI-2026-0086', siteId: 'GJ-AHM-0312', operator: 'Jio',    circle: 'Ahmedabad', erectedType: 'GMT 42m', completionDate: '2026-05-26', powerSupply: 'DG Backup Live',    structuralAudit: 'In Progress', status: 'pending', equipmentStatus: 'awaiting', progress: 75 },
  { rfiNum: 'RFI-2026-0085', siteId: 'KA-BLR-0567', operator: 'Vi',     circle: 'Bengaluru', erectedType: 'GMT 36m', completionDate: '2026-05-25', powerSupply: 'EB + DG Live',     structuralAudit: 'Certified', status: 'ready', equipmentStatus: 'awaiting', progress: 80 },
  { rfiNum: 'RFI-2026-0084', siteId: 'RJ-JPR-0112', operator: 'Jio',    circle: 'Jaipur',    erectedType: 'GMT 45m', completionDate: '2026-05-22', powerSupply: 'EB 15kW Grid Live', structuralAudit: 'Certified', status: 'complete',equipmentStatus: 'installed', progress: 100 }
];

let MOCK_SLA_DATA = [
  {
    srId: 'SR-2026-0889', site: 'DL-DEL-0045', operator: 'BSNL', circle: 'Delhi',
    type: 'SP Creation', slaClass: 'P1', slaHours: 4, elapsed: 4.8, rag: 'red',
    milestones: [
      { name: 'SR',          status: 'done',     time: '07:52' },
      { name: 'SP',          status: 'breached', time: 'OVERDUE' },
      { name: 'SO',          status: 'pending',  time: '—' },
      { name: 'RFI',         status: 'pending',  time: '—' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0888', site: 'MH-NGP-0134', operator: 'Vi', circle: 'Nagpur',
    type: 'RFI Response', slaClass: 'P2', slaHours: 8, elapsed: 7.1, rag: 'amber',
    milestones: [
      { name: 'SR',          status: 'done',     time: 'Yesterday' },
      { name: 'SP',          status: 'done',     time: 'Yesterday' },
      { name: 'SO',          status: 'done',     time: 'Yesterday' },
      { name: 'RFI',         status: 'active',   time: 'In Progress' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0891', site: 'MH-MUM-0234', operator: 'Jio', circle: 'Mumbai',
    type: 'SP Creation', slaClass: 'P1', slaHours: 4, elapsed: 1.2, rag: 'green',
    milestones: [
      { name: 'SR',          status: 'done',     time: '09:14' },
      { name: 'SP',          status: 'active',   time: 'In Review' },
      { name: 'SO',          status: 'pending',  time: '—' },
      { name: 'RFI',         status: 'pending',  time: '—' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0890', site: 'MH-PUN-0891', operator: 'Airtel', circle: 'Pune',
    type: 'SO Ingest', slaClass: 'P2', slaHours: 8, elapsed: 3.5, rag: 'green',
    milestones: [
      { name: 'SR',          status: 'done',     time: '08:47' },
      { name: 'SP',          status: 'done',     time: '08:48' },
      { name: 'SO',          status: 'active',   time: 'Processing' },
      { name: 'RFI',         status: 'pending',  time: '—' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0887', site: 'GJ-AHM-0312', operator: 'Jio', circle: 'Ahmedabad',
    type: 'SO + RFI', slaClass: 'P2', slaHours: 8, elapsed: 2.8, rag: 'amber',
    milestones: [
      { name: 'SR',          status: 'done',     time: 'Yesterday' },
      { name: 'SP',          status: 'done',     time: 'Yesterday' },
      { name: 'SO',          status: 'done',     time: 'Yesterday' },
      { name: 'RFI',         status: 'active',   time: 'Awaiting' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  }
];

let SP_PENDING = [
  { srId: 'SR-2026-0891', site: 'MH-MUM-0234', operator: 'Jio',    circle: 'Mumbai',    missing: 0 },
  { srId: 'SR-2026-0889', site: 'DL-DEL-0045', operator: 'BSNL',   circle: 'Delhi',     missing: 0 },
  { srId: 'SR-2026-0886', site: 'KA-BLR-0567', operator: 'Vi',     circle: 'Bengaluru', missing: 2 },
  { srId: 'SR-2026-0880', site: 'MP-BPL-0231', operator: 'Airtel', circle: 'Bhopal',    missing: 1 }
];

let SP_FORM_DATA = {
  'SR-2026-0891': {
    siteId: 'MH-MUM-0234', towerCode: 'JIO-MUM-GF-2234', circle: 'Maharashtra – Mumbai',
    operator: 'Jio', siteType: 'Ground Mounted Tower (GMT)', towerHeight: '42',
    tenantCount: '1', powerSource: 'EB + DG (Dual)', earthing: 'IS 3043',
    latitude: '19.1876', longitude: '72.8487', state: 'Maharashtra',
    district: 'Mumbai Suburban', pincode: '400064', rowRef: 'MCGM/2026/ROW/4521',
    structuralReport: '', slaClass: 'P1 – 4 Hours',
    ownerId: '154450', globalId: 'GB-00050', srTypeColocNew: 'Colocation', srDate: '22-May',
    siteName: 'Malad West', customerName: 'Jio', regionZoneBilling: 'West', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P1', countOduIdu: '1',
    countAntennas: '2', countMwAntenna: '1', diaMw: '0.6', weightMw: '15', mwAzimuth: '95.0'
  },
  'SR-2026-0889': {
    siteId: 'DL-DEL-0045', towerCode: 'BSNL-DEL-RT-0045', circle: 'Delhi',
    operator: 'BSNL', siteType: 'Rooftop Tower (RoT)', towerHeight: '15',
    tenantCount: '2', powerSource: 'EB only', earthing: 'IS 3043 / TAIPA',
    latitude: '28.6315', longitude: '77.2194', state: 'Delhi',
    district: 'New Delhi', pincode: '110001', rowRef: '', structuralReport: '',
    slaClass: 'P1 – 4 Hours',
    ownerId: '154449', globalId: 'GB-00049', circle: 'DL', srTypeColocNew: 'Colocation', srDate: '22-May',
    siteName: 'Moti Nagar', customerName: 'Vi', regionZoneBilling: 'West', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P2', countOduIdu: '2',
    countAntennas: '3', countMwAntenna: '1', diaMw: '0.6', weightMw: '15', mwAzimuth: '224.23'
  },
  'SR-2026-0886': {
    siteId: 'KA-BLR-0567', towerCode: 'VI-BLR-GMT-0567', circle: 'Karnataka – Bengaluru',
    operator: 'Vi', siteType: 'Ground Mounted Tower', towerHeight: '36',
    tenantCount: '', powerSource: 'EB + DG (15 kVA)', earthing: 'IS 3043',
    latitude: '12.8352', longitude: '77.6635', state: 'Karnataka',
    district: 'Bengaluru Urban', pincode: '', rowRef: '', structuralReport: '',
    slaClass: 'P2 – 8 Hours',
    ownerId: '154451', globalId: 'GB-00051', srTypeColocNew: 'Colocation', srDate: '23-May',
    siteName: 'Nagpur West', customerName: 'Vi', regionZoneBilling: 'South', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P2', countOduIdu: '3',
    countAntennas: '3', countMwAntenna: '2', diaMw: '0.6', weightMw: '15', mwAzimuth: '110.15'
  },
  'SR-2026-0880': {
    siteId: 'MP-BPL-0231', towerCode: '', circle: 'Madhya Pradesh – Bhopal',
    operator: 'Airtel', siteType: '', towerHeight: '',
    tenantCount: '', powerSource: 'EB + DG', earthing: 'IS 3043',
    latitude: '23.2599', longitude: '77.4126', state: 'Madhya Pradesh',
    district: 'Bhopal', pincode: '462001', rowRef: 'BDA/2026/0345', structuralReport: '',
    slaClass: 'P2 – 8 Hours',
    ownerId: '154452', globalId: 'GB-00052', srTypeColocNew: 'Colocation', srDate: '24-May',
    siteName: 'Bhopal Town', customerName: 'Airtel', regionZoneBilling: 'Central', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P2', countOduIdu: '1',
    countAntennas: '2', countMwAntenna: '1', diaMw: '0.6', weightMw: '15', mwAzimuth: '315.4'
  }
};

let ACTIVITY_EVENTS = [
  { msg: '<strong>AI extracted</strong> SR data from Jio email – SR-2026-0891 created', color: '#6366f1', time: '09:15' },
  { msg: '<strong>SP form auto-populated</strong> for MH-MUM-0234 | 12 fields extracted', color: '#22c55e', time: '09:16' },
  { msg: '<strong>RFI auto-drafted</strong> for KA-BLR-0567 – 2 missing fields detected', color: '#f59e0b', time: '09:10' },
  { msg: '<strong>SLA breach alert</strong> raised – SR-2026-0889 | Delhi | P1 overdue', color: '#ef4444', time: '09:05' },
  { msg: '<strong>SO ingestion started</strong> – AIR-2026-78901 | Pune | 65% complete', color: '#3b82f6', time: '08:52' },
  { msg: '<strong>RFI response received</strong> from Vi – MH-NGP-0134 power data ingested', color: '#14b8a6', time: '08:18' },
  { msg: '<strong>SR-2026-0884 closed</strong> – Jio Jaipur SP completed within SLA', color: '#22c55e', time: '07:45' }
];

let CIRCLE_DATA = [
  { circle: 'Maharashtra', total: 52, auto: 48, sla: '96%', tat: '3.8h', breaches: 1 },
  { circle: 'Karnataka', total: 38, auto: 33, sla: '91%', tat: '4.5h', breaches: 2 },
  { circle: 'Delhi NCR', total: 31, auto: 29, sla: '88%', tat: '5.1h', breaches: 3 },
  { circle: 'Gujarat', total: 28, auto: 26, sla: '97%', tat: '3.2h', breaches: 0 },
  { circle: 'Tamil Nadu', total: 25, auto: 23, sla: '98%', tat: '3.0h', breaches: 0 },
  { circle: 'Rajasthan', total: 22, auto: 20, sla: '94%', tat: '4.2h', breaches: 1 },
  { circle: 'Uttar Pradesh', total: 19, auto: 16, sla: '89%', tat: '5.5h', breaches: 2 },
  { circle: 'West Bengal', total: 14, auto: 12, sla: '93%', tat: '4.1h', breaches: 1 },
];

// ===================================================
// STATE
// ===================================================
let currentView = 'dashboard';
let selectedEmail = null;
let selectedSP = null;
let charts = {};
let soViewStyle = 'row';
let rfiViewStyle = 'row';
let srViewStyle = 'row';

// ===================================================
// NAVIGATION
// ===================================================
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const view = item.dataset.view;
      navigateTo(view);
    });
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
}

function navigateTo(view) {
  if (currentUser.role === 'circle' && view === 'dashboard') {
    view = 'inbox';
  }
  currentView = view;

  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  document.getElementById(`nav-${view}`)?.classList.add('active');

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`)?.classList.add('active');

  const breadcrumbs = {
    'dashboard': 'Dashboard',
    'inbox': 'Email Inbox',
    'sr-board': 'SR Intake',
    'sp-creation': 'SP Creation',
    'so-recieval': 'SO Recieval',
    'rfi-recieval': 'RFIP Readiness – Ready for Installation',
    'sla-tracker': 'SLA Milestone Tracker',
    'analytics': 'Analytics & Insights'
  };
  document.getElementById('breadcrumb').textContent = breadcrumbs[view] || view;

  if (view === 'analytics' && !charts.slaTrend) {
    setTimeout(renderAnalyticsCharts, 100);
  }
  if (view === 'dashboard' && !charts.operator) {
    setTimeout(renderDashboardCharts, 100);
  }
  if (view === 'rfi-recieval') {
    setTimeout(renderRFIView, 100);
  }
}

// ===================================================
// CLOCK
// ===================================================
function updateClock() {
  const now = new Date();
  const opts = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById('current-time').textContent = `IST ${now.toLocaleTimeString('en-IN', opts)}`;
}

// ===================================================
// KPI COUNTER ANIMATION
// ===================================================
function animateCounters() {
  document.querySelectorAll('.kpi-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = start + suffix;
      }
    }, 25);
  });
}

// ===================================================
// ACTIVITY FEED
// ===================================================
function renderActivityFeed() {
  const feed = document.getElementById('activity-feed');
  feed.innerHTML = '';
  ACTIVITY_EVENTS.forEach((ev, i) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'activity-item';
      div.innerHTML = `
        <div class="activity-dot" style="background:${ev.color}"></div>
        <div>
          <div class="activity-text">${ev.msg}</div>
          <div class="activity-time">${ev.time} IST</div>
        </div>`;
      feed.prepend(div);
    }, i * 200);
  });
}

function renderBreachList() {
  const list = document.getElementById('breach-list');
  const breaches = MOCK_SRS.filter(s => {
    const pct = s.elapsed / s.slaHours;
    return pct >= 1 || (pct >= 0.85 && s.status !== 'complete');
  }).slice(0, 3);

  list.innerHTML = breaches.map(b => {
    const pct = Math.min((b.elapsed / b.slaHours) * 100, 100);
    const rem = Math.max(b.slaHours - b.elapsed, 0).toFixed(1);
    return `
      <div class="breach-item">
        <div class="breach-sr">${b.id} – ${b.site}</div>
        <div class="breach-info">
          ${b.operator} | ${b.circle} | ${b.type} | SLA: ${b.slaHours}h
          ${b.elapsed >= b.slaHours ? '<span style="color:var(--red);font-weight:700;"> BREACHED</span>' : ` | ${rem}h remaining`}
        </div>
        <div class="breach-bar-wrap">
          <div class="breach-bar" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join('');
}

// ===================================================
// DASHBOARD CHARTS
// ===================================================
function renderDashboardCharts() {
  const isLight = document.body.classList.contains('light-theme');
  const chartDefaults = {
    color: isLight ? '#334155' : '#a1b0cb',
    font: { family: 'Inter', size: 12 },
  };
  Chart.defaults.color = chartDefaults.color;
  Chart.defaults.font = chartDefaults.font;

  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
  const tickColor = isLight ? '#334155' : '#a1b0cb';
  const borderCol = isLight ? '#ffffff' : '#111827';

  // Operator bar chart
  const ctx1 = document.getElementById('operatorChart').getContext('2d');
  charts.operator = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May'],
      datasets: [
        { label: 'Jio',    data: [18,22,19,25,28], backgroundColor: '#6366f1' },
        { label: 'Airtel', data: [14,16,18,20,22], backgroundColor: '#f59e0b' },
        { label: 'Vi',     data: [8, 10,12,11,15], backgroundColor: '#10b981' },
        { label: 'BSNL',   data: [5, 6, 7, 8, 9],  backgroundColor: '#ef4444' }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: tickColor } },
        y: { grid: { color: gridColor }, ticks: { color: tickColor } }
      }
    }
  });

  // Type doughnut chart
  const ctx2 = document.getElementById('typeChart').getContext('2d');
  charts.type = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['SP Creation', 'SO Ingest', 'RFI'],
      datasets: [{
        data: [42, 35, 22],
        backgroundColor: ['#a855f7','#3b82f6','#14b8a6'],
        borderColor: borderCol,
        borderWidth: 3
      }]
    },
    options: {
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, boxWidth: 12 } }
      }
    }
  });
}

// ===================================================
// EMAIL INBOX
// ===================================================
function renderEmailList() {
  const list = document.getElementById('email-list');
  list.innerHTML = MOCK_EMAILS.map(em => `
    <div class="email-item ${em.unread ? 'unread' : ''}" data-id="${em.id}">
      <div class="email-meta">
        <span class="email-sender">${em.sender}</span>
        <span class="email-time">${em.time.split(' ')[1]}</span>
      </div>
      <div class="email-subject">${em.subject}</div>
      <div class="email-meta" style="margin-top:4px">
        <span class="email-preview">${em.body.split('\n')[2]?.trim() || ''}</span>
        ${em.unread ? `<span class="priority-tag ${em.priority}">${em.priority.charAt(0).toUpperCase() + em.priority.slice(1)}</span>` : `<span class="priority-tag low">Registered by AI</span>`}
      </div>
    </div>`).join('');

  list.querySelectorAll('.email-item').forEach(item => {
    item.addEventListener('click', () => {
      list.querySelectorAll('.email-item').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      const email = MOCK_EMAILS.find(e => e.id === item.dataset.id);
      if (email.unread) {
        email.unread = false;
        email.priority = 'low';
        item.classList.remove('unread');
        renderEmailList();
        updateBadgesAndCounters();
      }
      renderEmailDetail(email);
    });
  });
}

function renderEmailDetail(email) {
  selectedEmail = email;
  const panel = document.getElementById('email-detail-panel');
  const fields = email.extracted;

  const fieldHtml = Object.entries(fields).map(([key, {val, conf}]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
    const confClass = conf >= 95 ? 'high' : conf >= 80 ? 'medium' : 'low';
    const confLabel = conf >= 95 ? '✓ High' : conf >= 80 ? '~ Medium' : '⚠ Low';
    return `
      <div class="extracted-field">
        <div class="field-label">${label}</div>
        <div class="field-value">${val}</div>
        <div class="field-conf ${confClass}">${confLabel} confidence (${conf}%)</div>
      </div>`;
  }).join('');

  const avgConf = Math.round(Object.values(fields).reduce((s,f) => s+f.conf, 0) / Object.keys(fields).length);

  panel.innerHTML = `
    <div class="email-detail-content">
      <div class="email-detail-header">
        <h2>${email.subject}</h2>
        <div class="email-meta-row">
          <span><strong>From:</strong> ${email.sender} &lt;${email.from}&gt;</span>
          <span><strong>Operator:</strong> ${email.operator}</span>
          <span><strong>Time:</strong> ${email.time} IST</span>
          <span class="priority-tag ${email.priority}">${email.priority} priority</span>
        </div>
      </div>

      <div class="email-body-raw">${email.body}</div>

      <div class="ai-extraction-panel">
        <div class="ai-extraction-header">
          <div class="ai-extraction-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" stroke-width="2"/></svg>
            AI Extraction Results
          </div>
          <span class="ai-confidence-badge">Avg Confidence: ${avgConf}%</span>
        </div>
        <div class="extracted-fields">${fieldHtml}</div>
        <div class="extraction-actions">
          <button class="btn-sm btn-success" id="approve-ingest-btn">✓ Approve &amp; Create SR</button>
          <button class="btn-sm btn-warning">⚠ Review Fields</button>
        </div>
      </div>
    </div>`;

  document.getElementById('approve-ingest-btn')?.addEventListener('click', () => {
    showToast(`✓ SR created from ${email.id} | ${email.srType} workflow initiated`);
  });
}

function initRunAIBtn() {
  const runBtn = document.getElementById('run-ai-btn');
  if (!runBtn) return;
  
  runBtn.addEventListener('click', () => {
    const unreads = MOCK_EMAILS.filter(e => e.unread);
    if (unreads.length === 0) {
      showToast('No unread emails to process!');
      return;
    }
    
    showAIOverlay('Processing unread emails with AI engine...', () => {
      // Process the unread emails
      unreads.forEach(e => {
        e.unread = false;
        e.priority = 'low';
      });
      
      const isBihar = (MOCK_EMAILS === BIHAR_EMAILS);
      
      if (isBihar) {
        // 2 SR Intake: BR-MZF-0134 (Vi) & BR-BGP-0045 (BSNL)
        if (!BIHAR_SRS.some(s => s.id === 'SR-2026-0902')) {
          BIHAR_SRS.unshift({ id: 'SR-2026-0902', type: 'SR Intake', operator: 'Vi', site: 'BR-MZF-0134', circle: 'Muzaffarpur', status: 'new', elapsed: 0.1, slaHours: 8, priority: 'high' });
        }
        if (!BIHAR_SRS.some(s => s.id === 'SR-2026-0903')) {
          BIHAR_SRS.unshift({ id: 'SR-2026-0903', type: 'SR Intake', operator: 'BSNL', site: 'BR-BGP-0045', circle: 'Bhagalpur', status: 'new', elapsed: 0.2, slaHours: 4, priority: 'high' });
        }
        
        // 2 SO Ingest: BR-GAY-0891 (Airtel) & BR-DBG-0312 (Jio)
        const gayaSO = BIHAR_SRS.find(s => s.id === 'SR-2026-0910');
        if (gayaSO) gayaSO.status = 'in-progress';
        const dbgSO = BIHAR_SRS.find(s => s.id === 'SR-2026-0907');
        if (dbgSO) dbgSO.status = 'in-progress';
        
        // 1 SP Creation: BR-PAT-0234 (Jio)
        const patnaSP = BIHAR_SRS.find(s => s.id === 'SR-2026-0911');
        if (patnaSP) patnaSP.status = 'new';
        
        MOCK_SRS = BIHAR_SRS;
      } else {
        // 2 SR Intake: MH-NGP-0134 (Vi) & DL-DEL-0045 (BSNL)
        if (!MOCK_SRS.some(s => s.id === 'SR-2026-0881')) {
          MOCK_SRS.unshift({ id: 'SR-2026-0881', type: 'SR Intake', operator: 'Vi', site: 'MH-NGP-0134', circle: 'Nagpur', status: 'new', elapsed: 0.1, slaHours: 8, priority: 'high' });
        }
        if (!MOCK_SRS.some(s => s.id === 'SR-2026-0882')) {
          MOCK_SRS.unshift({ id: 'SR-2026-0882', type: 'SR Intake', operator: 'BSNL', site: 'DL-DEL-0045', circle: 'Delhi', status: 'new', elapsed: 0.2, slaHours: 4, priority: 'high' });
        }
        
        // 2 SO Ingest: MH-PUN-0891 (Airtel) & GJ-AHM-0312 (Jio)
        const punSO = MOCK_SRS.find(s => s.id === 'SR-2026-0890');
        if (punSO) punSO.status = 'in-progress';
        const ahmSO = MOCK_SRS.find(s => s.id === 'SR-2026-0887');
        if (ahmSO) ahmSO.status = 'in-progress';
        
        // 1 SP Creation: MH-MUM-0234 (Jio)
        const mumSP = MOCK_SRS.find(s => s.id === 'SR-2026-0891');
        if (mumSP) mumSP.status = 'new';
        
        // Sync backups
        GLOBAL_MOCK_EMAILS.length = 0;
        GLOBAL_MOCK_EMAILS.push(...MOCK_EMAILS);
        GLOBAL_MOCK_SRS.length = 0;
        GLOBAL_MOCK_SRS.push(...MOCK_SRS);
      }
      
      // Re-render
      renderEmailList();
      renderKanban();
      renderSPList();
      renderSOGrid();
      renderSLAList();
      updateBadgesAndCounters();
      
      showToast('✓ AI processed 5 unread emails | Registered: 2 SR Intake, 2 SO Ingest, 1 SP Creation');
    });
  });
}

// ===================================================
// SR KANBAN BOARD
// ===================================================
function renderKanban() {
  const board = document.getElementById('kanban-board');
  const tableWrap = document.getElementById('sr-row-table-wrap');
  
  if (!board || !tableWrap) return;

  if (srViewStyle === 'grid') {
    board.style.display = 'flex';
    tableWrap.style.display = 'none';

    const cols = [
      { id: 'new',         label: 'New',          color: '#6366f1' },
      { id: 'in-progress', label: 'In Progress',  color: '#f59e0b' },
      { id: 'pending-info',label: 'Pending Info', color: '#3b82f6' },
      { id: 'complete',    label: 'Completed',    color: '#22c55e' }
    ];

    board.innerHTML = cols.map(col => {
      const cards = MOCK_SRS.filter(s => s.status === col.id);
      return `
        <div class="kanban-col">
          <div class="kanban-col-header">
            <div class="col-title">
              <span class="col-dot" style="background:${col.color}"></span>
              ${col.label}
            </div>
            <span class="col-count">${cards.length}</span>
          </div>
          <div class="kanban-cards">
            ${cards.map(sr => renderSRCard(sr)).join('')}
          </div>
        </div>`;
    }).join('');
  } else {
    board.style.display = 'none';
    tableWrap.style.display = 'block';

    const tbody = document.getElementById('sr-row-tbody');
    if (!tbody) return;

    tbody.innerHTML = MOCK_SRS.map(sr => {
      const statusClass = { 'new':'pending', 'in-progress':'processing', 'pending-info':'failed', 'complete':'complete' }[sr.status] || 'pending';
      const opClass = `operator-${sr.operator.toLowerCase()}`;
      
      const pct = sr.elapsed / sr.slaHours;
      const rem = Math.max(sr.slaHours - sr.elapsed, 0).toFixed(1);
      const slaClass = sr.status === 'complete' ? 'green' : pct >= 1 ? 'red' : pct >= 0.75 ? 'amber' : 'green';
      const slaText = sr.status === 'complete' ? 'Closed' : pct >= 1 ? 'BREACHED' : `${rem}h left`;

      const statusLabels = {
        'new': 'New SR',
        'in-progress': 'Processing',
        'pending-info': 'Awaiting Info',
        'complete': 'Completed'
      };
      const statusLabel = statusLabels[sr.status] || sr.status;

      return `
        <tr>
          <td style="font-family:var(--font-mono);font-weight:700;color:var(--accent);">${sr.id}</td>
          <td style="font-weight:600;color:var(--text-primary);">${sr.site}</td>
          <td><span class="sr-operator-chip ${opClass}" style="font-size:11px; font-weight:600; padding:2px 8px; border-radius:4px;">${sr.operator}</span></td>
          <td>${sr.circle}</td>
          <td><span class="priority-tag ${sr.priority}" style="font-size:11px; padding:2px 8px; border-radius:4px;">${sr.priority.toUpperCase()}</span></td>
          <td>
            <span class="status-chip ${statusClass}">${statusLabel.toUpperCase()}</span>
          </td>
          <td>
            <div style="display:flex; gap:6px;">
              <button class="btn-sm btn-primary" onclick="openSRDetailModal('${sr.id}')">View</button>
              ${(sr.status === 'pending-info' && NUDGE_AGENTS[sr.id]) ? `
                <button class="btn-sm" style="background:var(--purple-bg); color:var(--purple); border:1px solid rgba(168,85,247,0.25); cursor:pointer;" onclick="openNudgeModal('${sr.id}')">⚡ Nudge</button>
              ` : (sr.status !== 'complete') ? `
                <button class="btn-sm btn-success" onclick="ingestSRState('${sr.id}')">✓ Ingest</button>
              ` : ''}
            </div>
          </td>
        </tr>`;
    }).join('');
  }
}

function renderSRCard(sr) {
  const pct = sr.elapsed / sr.slaHours;
  const rem = Math.max(sr.slaHours - sr.elapsed, 0).toFixed(1);
  const slaClass = sr.status === 'complete' ? 'green' : pct >= 1 ? 'red' : pct >= 0.75 ? 'amber' : 'green';
  const slaText = sr.status === 'complete' ? 'Closed' : pct >= 1 ? 'BREACHED' : `${rem}h left`;

  const opClass = `operator-${sr.operator.toLowerCase()}`;

  return `
    <div class="sr-card" onclick="openSRDetailModal('${sr.id}')">
      <div class="sr-card-top">
        <span class="sr-number">${sr.id}</span>
        <span class="sr-type-badge ${sr.type.toLowerCase()}">${sr.type}</span>
      </div>
      <div class="sr-card-title">${sr.site} | ${sr.circle}</div>
      <div class="sr-card-meta">
        <span class="sr-operator-chip ${opClass}">${sr.operator}</span>
      </div>
    </div>`;
}

// ===================================================
// SP CREATION
// ===================================================
function renderSPList() {
  const list = document.getElementById('sp-list');
  list.innerHTML = SP_PENDING.map(sp => `
    <div class="sp-item" data-sr="${sp.srId}">
      <div class="sp-item-sr">${sp.srId}</div>
      <div class="sp-item-site">${sp.site}</div>
      <div class="sp-item-meta">${sp.operator} | ${sp.circle}${sp.missing > 0 ? ` | <span style="color:var(--amber)">⚠ ${sp.missing} missing</span>` : ' | <span style="color:var(--green)">✓ Complete</span>'}</div>
    </div>`).join('');

  list.querySelectorAll('.sp-item').forEach(item => {
    item.addEventListener('click', () => {
      list.querySelectorAll('.sp-item').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      renderSPForm(item.dataset.sr);
    });
  });
}

function renderSPForm(srId) {
  selectedSP = srId;
  const data = SP_FORM_DATA[srId];
  if (!data) return;

  const sp = SP_PENDING.find(s => s.srId === srId);
  const panel = document.getElementById('sp-form-panel');

  const missing = [];
  // Only detect missing fields if the SP row is NOT already marked as completed (missing > 0)
  if (sp && sp.missing > 0) {
    ['towerCode','rowRef','structuralReport','siteType','tenantCount','pincode'].forEach(f => {
      if (!data[f]) missing.push(f);
    });
  }

  const field = (key, label, val, aiExtracted=true) => `
    <div class="form-group">
      <label class="form-label">
        ${label}
        ${aiExtracted && val ? `<span class="ai-tag">AI</span>` : ''}
        ${(!val && sp && sp.missing > 0) ? `<span class="missing-tag">MISSING</span>` : ''}
      </label>
      <input class="form-input ${(val || (sp && sp.missing === 0)) ? 'ai-filled' : 'missing'}" type="text" value="${val}" placeholder="${(val || (sp && sp.missing === 0)) ? '' : 'Required – send RFI'}" />
    </div>`;

  const selectField = (key, label, val, options) => `
    <div class="form-group">
      <label class="form-label">${label} ${val ? '<span class="ai-tag">AI</span>' : (sp && sp.missing > 0) ? '<span class="missing-tag">MISSING</span>' : ''}</label>
      <select class="form-select">
        <option value="${val}">${val || '-- Select --'}</option>
        ${options.map(o => `<option>${o}</option>`).join('')}
      </select>
    </div>`;

  const agent = NUDGE_AGENTS[srId];

  if (missing.length > 0 && agent) {
    // 2-column layout with integrated nudge panel!
    panel.innerHTML = `
      <div class="sp-form-container-grid">
        <div class="sp-form-left-col">
          <div class="sp-form-content" style="padding:0">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
              <div>
                <div style="font-size:11px;color:var(--text-muted)">SR Reference</div>
                <div style="font-size:18px;font-weight:700;color:var(--accent);font-family:var(--font-mono)">${srId}</div>
              </div>
              <div class="rfi-auto-note" style="margin-bottom:0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2"/><line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2"/><line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/></svg>
                ${missing.length} field(s) missing – agent nudge available
              </div>
            </div>

            <div class="form-section">
              <div class="form-section-title">Site Identification</div>
              <div class="form-grid">
                ${field('siteId', 'Site ID', data.siteId)}
                ${field('towerCode', 'Tower Code', data.towerCode)}
                ${field('circle', 'Circle', data.circle)}
                ${field('state', 'State', data.state)}
                ${field('district', 'District', data.district)}
                ${field('pincode', 'Pincode', data.pincode)}
              </div>
            </div>

            <div class="form-section">
              <div class="form-section-title">Operator & Tenancy</div>
              <div class="form-grid">
                ${field('operator', 'Operator', data.operator)}
                ${selectField('siteType', 'Site Type', data.siteType, ['Ground Mounted Tower (GMT)', 'Rooftop Tower (RoT)', 'Monopole', 'Guyed Mast'])}
                ${field('towerHeight', 'Tower Height (m)', data.towerHeight)}
                ${field('tenantCount', 'Tenant Count', data.tenantCount)}
                ${field('slaClass', 'SLA Class', data.slaClass)}
              </div>
            </div>

            <div class="form-section">
              <div class="form-section-title">Infrastructure & Power</div>
              <div class="form-grid">
                ${field('powerSource', 'Power Source', data.powerSource)}
                ${field('earthing', 'Earthing Standard', data.earthing)}
                ${field('latitude', 'Latitude', data.latitude)}
                ${field('longitude', 'Longitude', data.longitude)}
              </div>
            </div>

            <div class="form-section">
              <div class="form-section-title">Approvals & Documents</div>
              <div class="form-grid">
                ${field('rowRef', 'RoW Approval Reference', data.rowRef, false)}
                ${field('structuralReport', 'Structural Report #', data.structuralReport, false)}
              </div>
            </div>
          </div>
          
          <div class="form-actions" style="margin-top:10px">
            <button class="btn-lg primary" onclick="submitSP('${srId}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Submit SP to IT System
            </button>
            <button class="btn-sm" style="background:var(--bg-input);color:var(--text-secondary);border:1px solid var(--border);cursor:pointer;padding:10px 16px;border-radius:8px;font-size:13px;font-weight:600;" onclick="showToast('Form saved as draft')">Save Draft</button>
          </div>
        </div>
        
        <div class="sp-form-right-col">
          <div class="sp-nudge-sidebar-card">
            <div class="sp-nudge-sidebar-title">⚡ Field Agent RFI Nudge</div>
            
            <div class="sp-nudge-agent-details">
              <div class="sp-nudge-avatar">${agent.name.split(' ').map(n=>n[0]).join('')}</div>
              <div>
                <div class="sp-nudge-name">${agent.name}</div>
                <div class="sp-nudge-role">${agent.role} · ${agent.circle}</div>
              </div>
            </div>
            
            <div class="sp-nudge-missing-fields">
              <div style="font-size:11px;font-weight:700;color:var(--red);text-transform:uppercase;margin-bottom:8px">Missing Fields (Pending)</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px">
                ${agent.missing.map(f => `<span class="nudge-missing-tag" style="margin:0">${f}</span>`).join('')}
              </div>
            </div>

            <div class="sp-nudge-status-row">
              <span class="sp-nudge-status-label">Nudge Status:</span>
              <span class="nudge-status-chip ${agent.status}">${agent.status.toUpperCase()}</span>
            </div>

            <div class="sp-nudge-actions">
              <button class="btn-lg primary" data-nudge-sr="${srId}" style="width:100%;justify-content:center;font-size:13px;padding:12px;cursor:pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2"/><polygon points="22,2 15,22 11,13 2,9 22,2" fill="currentColor"/></svg>
                Nudge Field Agent
              </button>
              <button class="btn-sm secondary" onclick="showToast('✓ RFI auto-drafted and sent to ${data.operator} team')" style="width:100%;justify-content:center;padding:10px;cursor:pointer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/><polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/></svg>
                Auto-Draft & Send RFI
              </button>
            </div>
          </div>
        </div>
      </div>`;
  } else {
    // Standard single-column layout
    panel.innerHTML = `
      <div class="sp-form-content">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
          <div>
            <div style="font-size:11px;color:var(--text-muted)">SR Reference</div>
            <div style="font-size:18px;font-weight:700;color:var(--accent);font-family:var(--font-mono)">${srId}</div>
          </div>
          <div style="background:var(--green-bg);color:var(--green);padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;border:1px solid rgba(34,197,94,0.2)">
            ✓ All Fields AI-Extracted
          </div>
        </div>

        <div class="form-section">
          <div class="form-section-title">Site Identification</div>
          <div class="form-grid">
            ${field('siteId', 'Site ID', data.siteId)}
            ${field('towerCode', 'Tower Code', data.towerCode)}
            ${field('circle', 'Circle', data.circle)}
            ${field('state', 'State', data.state)}
            ${field('district', 'District', data.district)}
            ${field('pincode', 'Pincode', data.pincode)}
          </div>
        </div>

        <div class="form-section">
          <div class="form-section-title">Operator & Tenancy</div>
          <div class="form-grid">
            ${field('operator', 'Operator', data.operator)}
            ${selectField('siteType', 'Site Type', data.siteType, ['Ground Mounted Tower (GMT)', 'Rooftop Tower (RoT)', 'Monopole', 'Guyed Mast'])}
            ${field('towerHeight', 'Tower Height (m)', data.towerHeight)}
            ${field('tenantCount', 'Tenant Count', data.tenantCount)}
            ${field('slaClass', 'SLA Class', data.slaClass)}
          </div>
        </div>

        <div class="form-section">
          <div class="form-section-title">Infrastructure & Power</div>
          <div class="form-grid">
            ${field('powerSource', 'Power Source', data.powerSource)}
            ${field('earthing', 'Earthing Standard', data.earthing)}
            ${field('latitude', 'Latitude', data.latitude)}
            ${field('longitude', 'Longitude', data.longitude)}
          </div>
        </div>

        <div class="form-section">
          <div class="form-section-title">Approvals & Documents</div>
          <div class="form-grid">
            ${field('rowRef', 'RoW Approval Reference', data.rowRef, false)}
            ${field('structuralReport', 'Structural Report #', data.structuralReport, false)}
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn-lg primary" onclick="submitSP('${srId}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Submit SP to IT System
        </button>
        <button class="btn-sm" style="background:var(--bg-input);color:var(--text-secondary);border:1px solid var(--border);cursor:pointer;padding:10px 16px;border-radius:8px;font-size:13px;font-weight:600;" onclick="showToast('Form saved as draft')">Save Draft</button>
      </div>`;
  }
}

// ===================================================
// SO GRID
// ===================================================
function renderSOGrid() {
  const grid = document.getElementById('so-grid');
  const tableWrap = document.getElementById('so-row-table-wrap');
  
  if (!grid || !tableWrap) return;

  if (soViewStyle === 'grid') {
    grid.style.display = 'grid';
    tableWrap.style.display = 'none';
    
    grid.innerHTML = MOCK_SO_LIST.map(so => {
      const statusClass = { processing:'processing', complete:'complete', pending:'pending', failed:'failed' }[so.status] || 'pending';
      return `
        <div class="so-card">
          <div class="so-card-header">
            <span class="so-number">${so.soNum}</span>
            <span class="so-status-badge ${statusClass}">${so.status.toUpperCase()}</span>
          </div>
          <div class="so-fields">
            <div><div class="so-field-label">Site ID</div><div class="so-field-value">${so.site}</div></div>
            <div><div class="so-field-label">Operator</div><div class="so-field-value">${so.operator}</div></div>
            <div><div class="so-field-label">Circle</div><div class="so-field-value">${so.circle}</div></div>
            <div><div class="so-field-label">BTS Type</div><div class="so-field-value">${so.bts}</div></div>
            <div><div class="so-field-label">SR Ref</div><div class="so-field-value">${so.srRef}</div></div>
            <div><div class="so-field-label">GoLive</div><div class="so-field-value">${so.goLive}</div></div>
          </div>
          <div class="so-progress-wrap">
            <div class="so-progress-label">
              <span>Ingestion Progress</span>
              <span>${so.progress}%</span>
            </div>
            <div class="so-progress-bar">
              <div class="so-progress-fill" style="width:${so.progress}%"></div>
            </div>
          </div>
          <button class="btn-sm ${so.status === 'complete' ? 'btn-success' : 'btn-primary'}" style="width:100%;justify-content:center;" onclick="showToast('${so.soNum} – ${so.status === 'complete' ? 'Completed' : 'Processing in IT system'}')">
            ${so.status === 'complete' ? '✓ View Record' : so.status === 'failed' ? '↺ Retry Ingestion' : '▶ Track Ingestion'}
          </button>
        </div>`;
    }).join('');
  } else {
    grid.style.display = 'none';
    tableWrap.style.display = 'block';
    
    const tbody = document.getElementById('so-row-tbody');
    if (!tbody) return;

    tbody.innerHTML = MOCK_SO_LIST.map(so => {
      const statusClass = { processing:'processing', complete:'complete', pending:'pending', failed:'failed' }[so.status] || 'pending';
      const opClass = `operator-${so.operator.toLowerCase()}`;
      return `
        <tr>
          <td style="font-family:var(--font-mono);font-weight:700;color:var(--accent);">${so.soNum}</td>
          <td style="font-family:var(--font-mono);color:var(--text-secondary);">${so.srRef}</td>
          <td style="font-weight:600;color:var(--text-primary);">${so.site}</td>
          <td><span class="sr-operator-chip ${opClass}" style="font-size:11px; font-weight:600; padding:2px 8px; border-radius:4px;">${so.operator}</span></td>
          <td>${so.circle}</td>
          <td style="font-family:var(--font-mono);font-size:12px;">${so.bts}</td>
          <td style="font-family:var(--font-mono);">${so.goLive}</td>
          <td>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="status-chip ${statusClass}">${so.status.toUpperCase()}</span>
              <div style="height:4px; width:60px; background:var(--bg-input); border-radius:2px; display:inline-block;">
                <div style="height:4px; width:${so.progress}%; background:linear-gradient(90deg, var(--accent), var(--purple)); border-radius:2px;"></div>
              </div>
              <span style="font-size:11px;font-family:var(--font-mono);">${so.progress}%</span>
            </div>
          </td>
          <td>
            <button class="btn-sm ${so.status === 'complete' ? 'btn-success' : 'btn-primary'}" onclick="showToast('${so.soNum} – ${so.status === 'complete' ? 'Completed' : 'Processing in IT system'}')">
              ${so.status === 'complete' ? '✓ View' : so.status === 'failed' ? '↺ Retry' : '▶ Track'}
            </button>
          </td>
        </tr>`;
    }).join('');
  }
}

// ===================================================
// RFIP READINESS (READY FOR INSTALLATION)
// ===================================================
function renderRFIView() {
  const kpiContainer = document.getElementById('rfi-kpi-row');
  const gridContainer = document.getElementById('rfi-grid');
  const tableWrap = document.getElementById('rfi-row-table-wrap');
  
  if (!kpiContainer || !gridContainer || !tableWrap) return;

  // Calculate RFI metrics
  const totalRFI = MOCK_RFI_LIST.length;
  const readyRFI = MOCK_RFI_LIST.filter(r => r.status === 'ready').length;
  const completeRFI = MOCK_RFI_LIST.filter(r => r.status === 'complete').length;
  const pendingRFI = MOCK_RFI_LIST.filter(r => r.status === 'pending').length;

  kpiContainer.innerHTML = `
    <div class="kpi-card">
      <div class="kpi-icon teal" style="background: var(--teal-bg); color: var(--teal); padding: 6px 12px; border-radius: 8px;">🏗️</div>
      <div>
        <div class="kpi-value" style="font-size:26px;">${totalRFI}</div>
        <div class="kpi-label">Total Built Sites</div>
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon blue" style="background: var(--blue-bg); color: var(--blue); padding: 6px 12px; border-radius: 8px;">⚡</div>
      <div>
        <div class="kpi-value" style="font-size:26px; color: var(--teal);">${readyRFI}</div>
        <div class="kpi-label">Ready for Installation</div>
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon orange" style="background: var(--orange-bg); color: var(--orange); padding: 6px 12px; border-radius: 8px;">⏳</div>
      <div>
        <div class="kpi-value" style="font-size:26px; color: var(--amber);">${pendingRFI}</div>
        <div class="kpi-label">In Structural Sign-off</div>
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon green" style="background: var(--green-bg); color: var(--green); padding: 6px 12px; border-radius: 8px;">✅</div>
      <div>
        <div class="kpi-value" style="font-size:26px; color: var(--green);">${completeRFI}</div>
        <div class="kpi-label">Handed Over (Active)</div>
      </div>
    </div>
  `;

  if (rfiViewStyle === 'grid') {
    gridContainer.style.display = 'grid';
    tableWrap.style.display = 'none';

    gridContainer.innerHTML = MOCK_RFI_LIST.map(rfi => {
      const isReady = rfi.status === 'ready';
      const isComplete = rfi.status === 'complete';
      
      // Status colors
      const badgeClass = rfi.status;
      const badgeLabel = rfi.status === 'ready' ? 'Ready for Handover' : rfi.status === 'complete' ? 'Active Handover' : 'Structural Audit';
      
      // Equipment installation text
      const equipLabel = rfi.equipmentStatus === 'awaiting' 
        ? 'Awaiting Operator Mounting' 
        : rfi.equipmentStatus === 'installing' 
          ? 'Mounting Antennas (In Progress)' 
          : 'Active Transmitting';
      const equipClass = rfi.equipmentStatus === 'installed' ? 'color: var(--green)' : rfi.equipmentStatus === 'installing' ? 'color: var(--amber)' : 'color: var(--text-secondary)';

      return `
        <div class="rfi-card">
          <div class="rfi-card-header">
            <span class="rfi-ref">${rfi.rfiNum}</span>
            <span class="rfi-status-badge ${badgeClass}">${badgeLabel}</span>
          </div>
          
          <div class="rfi-site-info">
            <div class="rfi-site-id">${rfi.siteId} | ${rfi.operator}</div>
            <div class="rfi-site-loc">${rfi.circle} Circle</div>
          </div>

          <div class="rfi-details-grid">
            <div class="rfi-detail-item">
              <span class="rfi-detail-label">Tower Style</span>
              <span class="rfi-detail-val">${rfi.erectedType}</span>
            </div>
            <div class="rfi-detail-item">
              <span class="rfi-detail-label">Completion Date</span>
              <span class="rfi-detail-val">${rfi.completionDate}</span>
            </div>
            <div class="rfi-detail-item">
              <span class="rfi-detail-label">Power supply</span>
              <span class="rfi-detail-val">${rfi.powerSupply}</span>
            </div>
            <div class="rfi-detail-item">
              <span class="rfi-detail-label">Structural Audit</span>
              <span class="rfi-detail-val">${rfi.structuralAudit}</span>
            </div>
          </div>

          <div class="rfi-checklist">
            <span class="rfi-checklist-title">Handover & Physical Checks</span>
            <div class="rfi-check-item">
              <span class="rfi-check-box checked">✓</span>
              <span>Tower Erected & Bolts Tensioned</span>
            </div>
            <div class="rfi-check-item">
              <span class="rfi-check-box checked">✓</span>
              <span>Grid connection live (Energized)</span>
            </div>
            <div class="rfi-check-item">
              <span class="rfi-check-box ${rfi.structuralAudit === 'Certified' ? 'checked' : 'unchecked'}">${rfi.structuralAudit === 'Certified' ? '✓' : ''}</span>
              <span>Structural Safety Certificate Issued</span>
            </div>
            <div class="rfi-check-item">
              <span class="rfi-check-box ${isComplete ? 'checked' : 'unchecked'}">${isComplete ? '✓' : ''}</span>
              <span>Ready for Installation (RFI) Declared</span>
            </div>
          </div>

          <div class="rfi-action-buttons">
            <div style="font-size:11px; margin-bottom:4px; font-weight: 500;">
              Equipment Status: <span style="${equipClass}; font-weight:700;">${equipLabel}</span>
            </div>
            ${isReady ? `
              <button class="btn-sm btn-primary" style="justify-content:center; padding: 10px;" onclick="acceptRFIHandover('${rfi.rfiNum}')">
                ⚡ Confirm RFI Handover & Start Mounting
              </button>
              <button class="btn-sm" style="background: var(--purple-bg); color: var(--purple); border: 1px solid rgba(168,85,247,0.25); justify-content:center; padding: 10px; cursor:pointer;" onclick="generateRFICertificate('${rfi.rfiNum}')">
                📄 Generate RFI Declaration Certificate
              </button>
            ` : isComplete ? `
              <button class="btn-sm btn-success" style="justify-content:center; padding: 10px;" onclick="showToast('RFI Handover already active for ${rfi.siteId}')">
                ✓ View Ingested Assets
              </button>
              <button class="btn-sm" style="background: var(--purple-bg); color: var(--purple); border: 1px solid rgba(168,85,247,0.25); justify-content:center; padding: 10px; cursor:pointer;" onclick="generateRFICertificate('${rfi.rfiNum}')">
                📄 Download Declaration Docs
              </button>
            ` : `
              <button class="btn-sm" style="background: var(--bg-input); color: var(--text-secondary); border: 1px solid var(--border); justify-content:center; padding: 10px; cursor: not-allowed;" disabled>
                ⏳ Awaiting Structural Audit Sign-off
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');
  } else {
    gridContainer.style.display = 'none';
    tableWrap.style.display = 'block';

    const tbody = document.getElementById('rfi-row-tbody');
    if (!tbody) return;

    tbody.innerHTML = MOCK_RFI_LIST.map(rfi => {
      const isReady = rfi.status === 'ready';
      const isComplete = rfi.status === 'complete';
      
      const badgeClass = rfi.status;
      const badgeLabel = rfi.status === 'ready' ? 'Ready' : rfi.status === 'complete' ? 'Active' : 'Audit';
      
      const equipLabel = rfi.equipmentStatus === 'awaiting' 
        ? 'Awaiting' 
        : rfi.equipmentStatus === 'installing' 
          ? 'Mounting' 
          : 'Live';
      const equipClass = rfi.equipmentStatus === 'installed' ? 'color: var(--green)' : rfi.equipmentStatus === 'installing' ? 'color: var(--amber)' : 'color: var(--text-secondary)';

      const checksPass = 2 + (rfi.structuralAudit === 'Certified' ? 1 : 0) + (isComplete ? 1 : 0);

      return `
        <tr>
          <td style="font-family:var(--font-mono);font-weight:700;color:var(--teal);">${rfi.rfiNum}</td>
          <td style="font-weight:600;color:var(--text-primary);">${rfi.siteId}</td>
          <td><span class="sr-operator-chip operator-${rfi.operator.toLowerCase()}" style="font-size:11px; font-weight:600; padding:2px 8px; border-radius:4px;">${rfi.operator}</span></td>
          <td>${rfi.circle}</td>
          <td>${rfi.erectedType}</td>
          <td style="font-family:var(--font-mono);">${rfi.completionDate}</td>
          <td style="font-size:12px;font-weight:500;">${rfi.powerSupply}</td>
          <td>
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="font-weight:700; color:${checksPass === 4 ? 'var(--green)' : 'var(--amber)'};">${checksPass}/4 Passed</span>
              <span style="font-size:11px;color:var(--text-muted);">(${rfi.structuralAudit === 'Certified' ? '✓Audit' : '✗Audit'})</span>
            </div>
          </td>
          <td>
            <span class="status-chip ${badgeClass}">${badgeLabel.toUpperCase()}</span>
            <span style="font-size:11px; ${equipClass}; font-weight:700; margin-left:6px;">(${equipLabel})</span>
          </td>
          <td>
            <div style="display:flex; gap:6px;">
              ${isReady ? `
                <button class="btn-sm btn-primary" onclick="acceptRFIHandover('${rfi.rfiNum}')">⚡ Ingest</button>
                <button class="btn-sm" style="background:var(--purple-bg); color:var(--purple); border:1px solid rgba(168,85,247,0.25); cursor:pointer;" onclick="generateRFICertificate('${rfi.rfiNum}')">📄 Cert</button>
              ` : isComplete ? `
                <button class="btn-sm btn-success" onclick="showToast('Active Handover live for ${rfi.siteId}')">✓ Live</button>
                <button class="btn-sm" style="background:var(--purple-bg); color:var(--purple); border:1px solid rgba(168,85,247,0.25); cursor:pointer;" onclick="generateRFICertificate('${rfi.rfiNum}')">📄 Cert</button>
              ` : `
                <button class="btn-sm" style="background:var(--bg-input); color:var(--text-secondary); border:1px solid var(--border); cursor:not-allowed;" disabled>⏳ Audit</button>
              `}
            </div>
          </td>
        </tr>`;
    }).join('');
  }
}

window.acceptRFIHandover = function(rfiNum) {
  showAIOverlay(`Initiating operator handover protocol for ${rfiNum}...`, () => {
    const item = MOCK_RFI_LIST.find(r => r.rfiNum === rfiNum);
    if (item) {
      item.status = 'complete';
      item.equipmentStatus = 'installing';
    }
    
    // Trigger simulation to complete mounting after a delay
    setTimeout(() => {
      if (item) {
        item.equipmentStatus = 'installed';
        renderRFIView();
        showToast(`📡 ${item.siteId} antennas mounted successfully! Operator equipment is live and transmitting!`);
      }
    }, 4500);

    renderRFIView();
    showToast(`✓ RFI Handover Completed! Scheduled equipment mounting for ${item.operator} engineering crew.`);
  });
};

window.generateRFICertificate = function(rfiNum) {
  const item = MOCK_RFI_LIST.find(r => r.rfiNum === rfiNum);
  if (!item) return;

  showToast(`📄 RFI Declaration Certificate generated successfully for ${item.siteId}`);
  
  // Custom Alert simulation popup for TAIPA RFI Cert
  const modal = document.createElement('div');
  modal.className = 'nudge-modal-backdrop open';
  modal.style.zIndex = '10000';
  modal.innerHTML = `
    <div class="nudge-modal" style="width: 500px; padding: 24px; display:flex; flex-direction:column; gap:16px;">
      <div style="text-align:center; border-bottom: 2px solid var(--border); padding-bottom: 12px;">
        <h3 style="color:var(--teal); font-size:18px;">RFI Declaration Certificate</h3>
        <span style="font-size:11px; color:var(--text-muted);">TowerCo Infrastructure & Operator Shared Network Agreement</span>
      </div>
      <div style="font-family:var(--font-mono); font-size:12px; color:var(--text-secondary); line-height:1.6; display:flex; flex-direction:column; gap:8px;">
        <div><strong>Certificate Ref:</strong> TCI-RFI-DEC-${item.rfiNum}</div>
        <div><strong>Site ID:</strong> ${item.siteId}</div>
        <div><strong>Operator Tenant:</strong> ${item.operator}</div>
        <div><strong>Tower Style:</strong> ${item.erectedType}</div>
        <div><strong>Grid Status:</strong> ${item.powerSupply}</div>
        <div><strong>Handover Status:</strong> PASS (Certified)</div>
        <div><strong>Date Approved:</strong> ${item.completionDate}</div>
        <div style="border-top:1.5px dashed var(--border); margin-top:8px; padding-top:8px; text-align:center; color:var(--green); font-weight:700;">
          ✓ READY FOR OPERATOR INSTALLATION (RFI) PASSED
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:12px;">
        <button class="btn-sm btn-primary" onclick="this.closest('.nudge-modal-backdrop').remove(); showToast('Certificate downloaded successfully')">✓ Download PDF</button>
        <button class="btn-sm" style="background:var(--bg-input); color:var(--text-secondary); border:1px solid var(--border); cursor:pointer;" onclick="this.closest('.nudge-modal-backdrop').remove()">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

// ===================================================
// SLA TRACKER
// ===================================================
function renderSLAList(filterStatus = 'all', filterOperator = 'all') {
  const list = document.getElementById('sla-list');
  let data = MOCK_SLA_DATA;
  if (filterStatus !== 'all') data = data.filter(d => d.rag === filterStatus);
  if (filterOperator !== 'all') data = data.filter(d => d.operator === filterOperator);

  list.innerHTML = data.map(sr => {
    const pct = Math.min((sr.elapsed / sr.slaHours) * 100, 100);
    const rem = Math.max(sr.slaHours - sr.elapsed, 0).toFixed(1);

    const milestonesHtml = sr.milestones.map((m, i) => `
      <div class="milestone-step ${m.status}">
        <div class="milestone-dot ${m.status}">${i + 1}</div>
        <div class="milestone-label">${m.name}</div>
        <div class="milestone-time ${m.status}">${m.time}</div>
      </div>`).join('');

    const ragIcon = { green: 'G', amber: 'A', red: 'R' }[sr.rag];

    return `
      <div class="sla-item ${sr.rag}">
        <div class="sla-item-header">
          <div class="sla-item-left">
            <div class="sla-rag ${sr.rag}">${ragIcon}</div>
            <div>
              <div class="sla-sr">${sr.srId}</div>
              <div class="sla-desc">${sr.site} | ${sr.operator} | ${sr.type}</div>
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:12px;color:var(--text-muted)">SLA: ${sr.slaClass} (${sr.slaHours}h)</div>
            <div style="font-size:13px;font-weight:700;color:${sr.rag === 'red' ? 'var(--red)' : sr.rag === 'amber' ? 'var(--amber)' : 'var(--green)'}">
              ${sr.elapsed >= sr.slaHours ? '⚠ BREACHED' : `${rem}h remaining`}
            </div>
            <div style="margin-top:6px">
              <div style="height:4px;width:140px;background:var(--bg-input);border-radius:2px;display:inline-block">
                <div style="height:4px;width:${pct}%;background:${sr.rag === 'red' ? 'var(--red)' : sr.rag === 'amber' ? 'var(--amber)' : 'var(--green)'};border-radius:2px"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="milestone-timeline">${milestonesHtml}</div>
      </div>`;
  }).join('');
}

function initSLAFilters() {
  const filterStatus = document.getElementById('sla-filter-status');
  const filterOperator = document.getElementById('sla-filter-operator');
  const update = () => renderSLAList(filterStatus.value, filterOperator.value);
  filterStatus.addEventListener('change', update);
  filterOperator.addEventListener('change', update);
}

// ===================================================
// ANALYTICS CHARTS
// ===================================================
function renderAnalyticsCharts() {
  const isLight = document.body.classList.contains('light-theme');
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
  const tickColor = isLight ? '#334155' : '#a1b0cb';
  const borderCol = isLight ? '#ffffff' : '#111827';

  // SLA Compliance Trend
  const ctx1 = document.getElementById('slaComplianceChart').getContext('2d');
  charts.slaTrend = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['W1 Apr','W2 Apr','W3 Apr','W4 Apr','W1 May','W2 May','W3 May','W4 May'],
      datasets: [{
        label: 'SLA Compliance %',
        data: [88, 90, 87, 92, 91, 93, 95, 94],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#6366f1',
        pointRadius: 5
      }, {
        label: 'Target (95%)',
        data: [95,95,95,95,95,95,95,95],
        borderColor: '#22c55e',
        borderDash: [6,3],
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { boxWidth: 12, padding: 16 } } },
      scales: {
        y: { min: 80, max: 100, grid: { color: gridColor }, ticks: { color: tickColor, callback: v => v+'%' } },
        x: { grid: { color: gridColor }, ticks: { color: tickColor } }
      }
    }
  });

  // AI Accuracy by Field
  const ctx2 = document.getElementById('aiAccuracyChart').getContext('2d');
  charts.aiAcc = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Site ID','Lat/Long','Operator','Circle','Site Type','Power Src','SLA Class','Tower Ht'],
      datasets: [{
        label: 'Accuracy %',
        data: [99, 98, 99, 97, 94, 93, 96, 97],
        backgroundColor: 'rgba(99,102,241,0.7)',
        borderColor: '#6366f1',
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { min: 85, max: 100, grid: { color: gridColor }, ticks: { color: tickColor, callback: v => v+'%' } },
        y: { grid: { display: false }, ticks: { color: tickColor } }
      }
    }
  });

  // RFI Aging
  const ctx3 = document.getElementById('rfiAgingChart').getContext('2d');
  charts.rfiAging = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['< 1 Day','1–2 Days','3–4 Days','> 4 Days'],
      datasets: [{
        data: [8, 12, 5, 4],
        backgroundColor: ['#22c55e','#f59e0b','#ef4444','#7f1d1d'],
        borderColor: borderCol,
        borderWidth: 3
      }]
    },
    options: {
      cutout: '60%',
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } } }
    }
  });

  // TAT Distribution
  const ctx4 = document.getElementById('tatChart').getContext('2d');
  charts.tat = new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: ['0–2h','2–4h','4–6h','6–8h','8–12h','>12h'],
      datasets: [{
        label: 'SR Count',
        data: [32, 48, 61, 52, 38, 16],
        backgroundColor: ['#22c55e','#22c55e','#f59e0b','#f59e0b','#ef4444','#7f1d1d'],
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: gridColor }, ticks: { color: tickColor } },
        x: { grid: { display: false }, ticks: { color: tickColor } }
      }
    }
  });

  // Circle performance table
  const tbody = document.getElementById('circle-tbody');
  tbody.innerHTML = CIRCLE_DATA.map(c => {
    const color = parseInt(c.sla) >= 95 ? 'var(--green)' : parseInt(c.sla) >= 90 ? 'var(--amber)' : 'var(--red)';
    return `
      <tr>
        <td style="font-weight:600;color:var(--text-primary)">${c.circle}</td>
        <td>${c.total}</td>
        <td>${c.auto} <span style="color:var(--text-muted)">(${Math.round(c.auto/c.total*100)}%)</span></td>
        <td><span style="color:${color};font-weight:700">${c.sla}</span></td>
        <td style="font-family:var(--font-mono)">${c.tat}</td>
        <td><span style="color:${c.breaches > 0 ? 'var(--red)' : 'var(--green)'};font-weight:700">${c.breaches}</span></td>
      </tr>`;
  }).join('');
}

// ===================================================
// NOTIFICATIONS
// ===================================================
const NOTIFS = [
  { title: 'SLA Breach – SR-2026-0889', body: 'BSNL Delhi site SP overdue by 0.8h. P1 SLA violated.', time: '09:00 IST' },
  { title: 'New Email – Jio NOC', body: 'SR request received for MH-MUM-0234. AI extracting data.', time: '09:14 IST' },
  { title: 'RFI Auto-Drafted', body: 'Missing fields detected in KA-BLR-0567. RFI sent to Vi team.', time: '09:10 IST' },
  { title: 'SO Ingest Progress', body: 'AIR-2026-78901 ingestion at 65%. ETA 45 minutes.', time: '08:52 IST' },
  { title: 'SLA Risk – SR-2026-0888', body: 'Vi Nagpur RFI approaching SLA limit. 0.9h remaining.', time: '08:30 IST' },
];

function initNotifications() {
  const btn = document.getElementById('notif-btn');
  const panel = document.getElementById('notif-panel');
  const closeBtn = document.getElementById('notif-close');

  const items = document.getElementById('notif-items');
  items.innerHTML = NOTIFS.map(n => `
    <div class="notif-item">
      <div class="notif-item-title">${n.title}</div>
      <div class="notif-item-body">${n.body}</div>
      <div class="notif-item-time">${n.time}</div>
    </div>`).join('');

  btn.addEventListener('click', () => panel.classList.toggle('open'));
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
    }
  });
}

// ===================================================
// AI OVERLAY
// ===================================================
function showAIOverlay(msg, callback) {
  const overlay = document.getElementById('ai-overlay');
  const msgEl   = document.getElementById('ai-overlay-msg');
  const fill    = document.getElementById('ai-progress-fill');
  msgEl.textContent = msg;
  overlay.classList.add('active');
  let prog = 0;
  const timer = setInterval(() => {
    prog += Math.random() * 12;
    if (prog >= 100) {
      prog = 100;
      fill.style.width = '100%';
      clearInterval(timer);
      setTimeout(() => {
        overlay.classList.remove('active');
        fill.style.width = '0%';
        if (callback) callback();
      }, 500);
    } else {
      fill.style.width = prog + '%';
    }
  }, 200);
}

// ===================================================
// TOAST
// ===================================================
function showToast(msg) {
  const existing = document.querySelector('.success-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'success-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ===================================================
// GLOBAL SEARCH
// ===================================================
function initSearch() {
  document.getElementById('global-search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    if (q.length < 2) return;
    const match = MOCK_SRS.find(s =>
      s.id.toLowerCase().includes(q) ||
      s.site.toLowerCase().includes(q) ||
      s.operator.toLowerCase().includes(q)
    );
    if (match) showToast(`Found: ${match.id} – ${match.site} | ${match.operator} | ${match.status}`);
  });
}

// ===================================================
// LIVE ACTIVITY SIMULATION
// ===================================================
const LIVE_EVENTS = [
  { msg: '<strong>AI parsed</strong> new Airtel email – SO mapping in progress', color: '#f59e0b' },
  { msg: '<strong>SLA timer</strong> updated – SR-2026-0888 critical threshold reached', color: '#ef4444' },
  { msg: '<strong>SO ingestion</strong> AIR-2026-78901 reached 70%', color: '#3b82f6' },
  { msg: '<strong>Field match</strong> – Site ID MH-MUM-0234 verified in OSS database', color: '#22c55e' },
  { msg: '<strong>RFI reminder</strong> auto-sent to Jio NOC for SR-2026-0891', color: '#6366f1' },
];

let liveIdx = 0;
function simulateLiveActivity() {
  setInterval(() => {
    const feed = document.getElementById('activity-feed');
    if (!feed) return;
    const ev = LIVE_EVENTS[liveIdx % LIVE_EVENTS.length];
    const now = new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
    const div = document.createElement('div');
    div.className = 'activity-item';
    div.innerHTML = `
      <div class="activity-dot" style="background:${ev.color}"></div>
      <div>
        <div class="activity-text">${ev.msg}</div>
        <div class="activity-time">${now} IST</div>
      </div>`;
    feed.prepend(div);
    if (feed.children.length > 8) feed.removeChild(feed.lastChild);
    liveIdx++;
  }, 8000);
}

// ===================================================
// NUDGE CENTER DATA & LOGIC
// ===================================================

let NUDGE_AGENTS = {
  'SR-2026-0891': { name: 'Ramesh Patil',    phone: '+91-98205-11234', email: 'r.patil@towerco.in', role: 'Site Engineer', circle: 'Mumbai',    teamsId: 'ramesh.patil@towerco.in',  missing: ['RoW Approval Ref', 'Structural Report #'], channel: 'whatsapp', status: 'pending' },
  'SR-2026-0889': { name: 'Ajay Mehta',      phone: '+91-99100-45678', email: 'a.mehta@towerco.in', role: 'Field Supervisor', circle: 'Delhi',    teamsId: 'ajay.mehta@towerco.in',    missing: ['RoW Approval Ref', 'DG Capacity', 'Structural Report #'], channel: 'teams',    status: 'pending' },
  'SR-2026-0886': { name: 'Deepa Krishnan',  phone: '+91-97400-78901', email: 'd.krishnan@towerco.in', role: 'Site Coordinator', circle: 'Bengaluru', teamsId: 'deepa.krishnan@towerco.in', missing: ['RoW Approval Ref', 'Pincode', 'Tenant Count'], channel: 'whatsapp', status: 'pending' },
  'SR-2026-0880': { name: 'Sunil Verma',     phone: '+91-88005-32100', email: 's.verma@towerco.in',  role: 'Field Engineer',  circle: 'Bhopal',  teamsId: 'sunil.verma@towerco.in',   missing: ['Tower Code', 'Site Type', 'Tower Height'], channel: 'teams',    status: 'pending' },
};

const NUDGE_HISTORY_DATA = [
  { channel: 'whatsapp', srId: 'SR-2026-0883', name: 'Vikram Singh', msg: 'EB connection status confirmed. Updated: Active Grid supply available.', time: '09:02 IST', status: 'responded' },
  { channel: 'teams',    srId: 'SR-2026-0885', name: 'Priya Nair',   msg: 'Nudge sent for Structural Report – Chennai site. No response yet.', time: '08:50 IST', status: 'sent' },
  { channel: 'whatsapp', srId: 'SR-2026-0884', name: 'Rohit Joshi',  msg: 'RoW approval number received: JDA/2026/ROW/1122 – SP form updated.', time: '07:40 IST', status: 'responded' },
  { channel: 'teams',    srId: 'SR-2026-0882', name: 'Anita Bose',   msg: 'Load bearing capacity report uploaded to SharePoint by site team.', time: '07:10 IST', status: 'responded' },
  { channel: 'whatsapp', srId: 'SR-2026-0879', name: 'Manish Gupta', msg: 'Escalated to Circle Manager – no response after 3 nudges in 12h.', time: '06:30 IST', status: 'escalated' },
];

let currentNudgeSR   = null;
let currentNudgeChan = 'whatsapp';

function buildNudgeMessage(srId, channel, agent) {
  const greeting = channel === 'whatsapp'
    ? `*Hello ${agent.name.split(' ')[0]}* 👋`
    : `Hi **${agent.name.split(' ')[0]}**,`;

  const missing = agent.missing.map(f => channel === 'whatsapp' ? `  • _${f}_` : `  • *${f}*`).join('\n');

  if (channel === 'whatsapp') {
    return `${greeting}

This is an automated reminder from *TowerAI – NOC Operations Desk*.

📋 *Service Request:* ${srId}
📍 *Circle:* ${agent.circle}
👤 *Your Role:* ${agent.role}

We are processing your site's SP creation and require the following information urgently:

${missing}

⏰ *SLA Impact:* Delay in providing this info may cause SLA breach. Please respond at the earliest.

Please reply directly to this message or upload documents to the site portal.

_This is an AI-generated nudge. Contact NOC at noc@towerco.in for queries._
TowerAI | TowerCo Infrastructure Pvt. Ltd.`;
  } else {
    return `${greeting}

**Automated SR Nudge from TowerAI – NOC Operations**

| Field | Detail |
|-------|--------|
| SR Reference | ${srId} |
| Circle | ${agent.circle} |
| Your Role | ${agent.role} |

**Missing Information Required:**

${missing}

> ⚠️ **SLA Alert:** This SR is approaching its SLA deadline. Providing the above information promptly will help avoid a breach.

Please update the site portal or reply to this Teams message with the required details.

---
*TowerAI Automated Nudge System | NOC Operations Desk*`;
  }
}


function openNudgeModal(srId) {
  currentNudgeSR   = srId;
  currentNudgeChan = NUDGE_AGENTS[srId]?.channel || 'whatsapp';
  const agent = NUDGE_AGENTS[srId];
  if (!agent) return;

  // SR label
  document.getElementById('nudge-modal-sr-label').textContent = `${srId} | ${agent.circle} | ${SP_FORM_DATA[srId]?.siteId || ''}`;

  // Agent info grid
  document.getElementById('nudge-agent-info').innerHTML = `
    <div>
      <div class="nudge-agent-field-label">Agent Name</div>
      <div class="nudge-agent-field-value">${agent.name}</div>
    </div>
    <div>
      <div class="nudge-agent-field-label">Role</div>
      <div class="nudge-agent-field-value">${agent.role}</div>
    </div>
    <div>
      <div class="nudge-agent-field-label">Circle</div>
      <div class="nudge-agent-field-value">${agent.circle}</div>
    </div>
    <div>
      <div class="nudge-agent-field-label">WhatsApp</div>
      <div class="nudge-agent-field-value">${agent.phone}</div>
    </div>
    <div>
      <div class="nudge-agent-field-label">Teams ID</div>
      <div class="nudge-agent-field-value" style="font-size:11px">${agent.teamsId}</div>
    </div>
    <div>
      <div class="nudge-agent-field-label">Email</div>
      <div class="nudge-agent-field-value" style="font-size:11px">${agent.email}</div>
    </div>`;

  // Missing fields
  document.getElementById('nudge-missing-fields').innerHTML = `
    <div class="nudge-missing-fields-label">⚠ ${agent.missing.length} Required Field${agent.missing.length > 1 ? 's' : ''} Missing</div>
    <div class="nudge-missing-tags">${agent.missing.map(f => `<span class="nudge-missing-tag">${f}</span>`).join('')}</div>`;

  // Set channel buttons
  setNudgeChannel(currentNudgeChan);

  // Send status reset
  document.getElementById('nudge-send-status').className = 'nudge-send-status';
  document.getElementById('nudge-send-status').textContent = '';

  document.getElementById('nudge-modal-backdrop').classList.add('open');
}

function setNudgeChannel(channel) {
  currentNudgeChan = channel;
  const agent = NUDGE_AGENTS[currentNudgeSR];
  if (!agent) return;

  // Update buttons
  document.querySelectorAll('.nudge-channel-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`ch-${channel}`).classList.add('active');

  // Update preview bar
  const isWA = channel === 'whatsapp';
  document.getElementById('nudge-channel-preview').innerHTML = isWA
    ? `<span style="color:#25d366;font-size:16px">📱</span> <strong style="color:#25d366">WhatsApp</strong> → ${agent.phone}`
    : `<span style="color:#6264a7;font-size:16px">💼</span> <strong style="color:#8b8de8">MS Teams</strong> → ${agent.teamsId}`;

  // Populate message
  document.getElementById('nudge-msg-textarea').value = buildNudgeMessage(currentNudgeSR, channel, agent);
}

function sendNudge() {
  const agent   = NUDGE_AGENTS[currentNudgeSR];
  const status  = document.getElementById('nudge-send-status');
  const sendBtn = document.getElementById('nudge-send-btn');

  status.className   = 'nudge-send-status sending';
  status.textContent = '⏳ Sending...';
  sendBtn.disabled   = true;

  setTimeout(() => {
    // Mark as sent in queue
    NUDGE_AGENTS[currentNudgeSR].status = 'sent';

    // Add to history
    const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }) + ' IST';
    NUDGE_HISTORY_DATA.unshift({
      channel:  currentNudgeChan,
      srId:     currentNudgeSR,
      name:     agent.name,
      msg:      `Nudge sent via ${currentNudgeChan === 'whatsapp' ? 'WhatsApp' : 'MS Teams'} for ${agent.missing.join(', ')}.`,
      time:     now,
      status:   'sent'
    });

    status.className   = 'nudge-send-status sent';
    status.textContent = `✓ Nudge sent via ${currentNudgeChan === 'whatsapp' ? 'WhatsApp' : 'Teams'}!`;
    sendBtn.disabled   = false;

    // Re-render SP Form to reflect sent status
    if (selectedSP === currentNudgeSR) {
      renderSPForm(currentNudgeSR);
    }
    updateBadgesAndCounters();

    const scheduled = document.getElementById('nudge-schedule-check').checked;
    const interval  = document.getElementById('nudge-remind-interval').value;

    setTimeout(() => {
      document.getElementById('nudge-modal-backdrop').classList.remove('open');
      showToast(`✓ ${agent.name} nudged via ${currentNudgeChan === 'whatsapp' ? 'WhatsApp' : 'Teams'}${scheduled ? ` | Auto-reminder in ${interval}` : ''}`);
    }, 1000);
  }, 1800);
}

function autoNudgeAll() {
  const pendingKeys = Object.keys(NUDGE_AGENTS).filter(k => NUDGE_AGENTS[k].status === 'pending');
  if (pendingKeys.length === 0) {
    showToast('No pending nudges to send!');
    return;
  }

  showAIOverlay(`Initiating Autonomous Auto-Nudge for ${pendingKeys.length} field agents...`, () => {
    pendingKeys.forEach(srId => {
      const agent = NUDGE_AGENTS[srId];
      agent.status = 'sent';

      // Add to nudge history
      const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }) + ' IST';
      NUDGE_HISTORY_DATA.unshift({
        channel: agent.channel || 'whatsapp',
        srId: srId,
        name: agent.name,
        msg: `[Autonomous AI Nudge] Dispatched urgent checklist request for missing fields: ${agent.missing.join(', ')}.`,
        time: now,
        status: 'sent'
      });
    });

    // Re-render SP Form to reflect sent status
    if (selectedSP && NUDGE_AGENTS[selectedSP]) {
      renderSPForm(selectedSP);
    }
    
    // Refresh SP list highlights
    renderSPList();

    updateBadgesAndCounters();
    showToast(`⚡ Autonomous AI successfully dispatched nudges to all ${pendingKeys.length} pending field agents!`);
  });
}

window.submitSP = function(srId) {
  const index = SP_PENDING.findIndex(sp => sp.srId === srId);
  if (index === -1) return;

  const sp = SP_PENDING[index];
  
  showAIOverlay(`Submitting Service Plan for ${srId} to IT system...`, () => {
    // Remove from pending SPs
    SP_PENDING.splice(index, 1);
    
    // Sync active backups
    if (currentUser.role === 'circle') {
      BIHAR_SP_PENDING = SP_PENDING;
    } else {
      GLOBAL_SP_PENDING = SP_PENDING;
    }
    
    // Update status in MOCK_SRS
    const srObj = MOCK_SRS.find(s => s.id === srId);
    if (srObj) {
      srObj.status = 'complete';
    }
    
    // Create new SO in MOCK_SO_LIST
    const soNum = `${sp.operator.toUpperCase()}-SO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    MOCK_SO_LIST.unshift({
      soNum: soNum,
      srRef: sp.srId,
      site: sp.site,
      operator: sp.operator,
      circle: sp.circle,
      bts: 'Nokia AirScale 5G',
      goLive: new Date(Date.now() + 15*24*60*60*1000).toISOString().split('T')[0],
      status: 'pending',
      progress: 0
    });
    
    // Add activity event for submission
    const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }) + ' IST';
    ACTIVITY_EVENTS.unshift({
      srId: sp.srId,
      siteId: sp.site,
      circle: sp.circle,
      operator: sp.operator,
      type: 'creation',
      msg: `SP approved and submitted. SO generated: ${soNum}`,
      time: now,
      status: 'complete'
    });

    // Sync SO backups
    if (currentUser.role === 'circle') {
      BIHAR_SO_LIST = MOCK_SO_LIST;
      BIHAR_SRS = MOCK_SRS;
      BIHAR_ACTIVITY_EVENTS = ACTIVITY_EVENTS;
    } else {
      GLOBAL_MOCK_SO_LIST = MOCK_SO_LIST;
      GLOBAL_MOCK_SRS = MOCK_SRS;
      GLOBAL_ACTIVITY_EVENTS = ACTIVITY_EVENTS;
    }
    
    // Clear selection if it was current
    if (selectedSP === srId) {
      selectedSP = null;
      document.getElementById('sp-form-panel').innerHTML = `
        <div class="no-selection">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="1.5"/></svg>
          <p>Select an SR to populate SP form</p>
        </div>`;
    }
    
    // Re-render views
    renderSPList();
    renderKanban();
    renderSOGrid();
    
    // Update badges
    updateBadgesAndCounters();
    
    // Show Toast
    showToast(`✓ SP successfully submitted for ${srId} and advanced to SO stage!`);
  });
};

window.submitAllCompletedSPs = function() {
  const completedSPs = SP_PENDING.filter(sp => sp.missing === 0);
  if (completedSPs.length === 0) {
    showToast('No completed SPs are ready for submission!');
    return;
  }

  const srIds = completedSPs.map(sp => sp.srId);
  
  showAIOverlay(`Initiating bulk submission for ${completedSPs.length} completed Service Plans...`, () => {
    // Filter out completed SPs
    SP_PENDING = SP_PENDING.filter(sp => sp.missing > 0);
    
    // Sync active backups
    if (currentUser.role === 'circle') {
      BIHAR_SP_PENDING = SP_PENDING;
    } else {
      GLOBAL_SP_PENDING = SP_PENDING;
    }
    
    // For each completed SP, advance in MOCK_SRS and create a new SO
    completedSPs.forEach(sp => {
      const srObj = MOCK_SRS.find(s => s.id === sp.srId);
      if (srObj) {
        srObj.status = 'complete';
      }
      
      const soNum = `${sp.operator.toUpperCase()}-SO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      MOCK_SO_LIST.unshift({
        soNum: soNum,
        srRef: sp.srId,
        site: sp.site,
        operator: sp.operator,
        circle: sp.circle,
        bts: 'Nokia AirScale 5G',
        goLive: new Date(Date.now() + 15*24*60*60*1000).toISOString().split('T')[0],
        status: 'pending',
        progress: 0
      });
      
      const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }) + ' IST';
      ACTIVITY_EVENTS.unshift({
        srId: sp.srId,
        siteId: sp.site,
        circle: sp.circle,
        operator: sp.operator,
        type: 'creation',
        msg: `SP approved and submitted. SO generated: ${soNum}`,
        time: now,
        status: 'complete'
      });
    });

    // Sync SO backups
    if (currentUser.role === 'circle') {
      BIHAR_SO_LIST = MOCK_SO_LIST;
      BIHAR_SRS = MOCK_SRS;
      BIHAR_ACTIVITY_EVENTS = ACTIVITY_EVENTS;
    } else {
      GLOBAL_MOCK_SO_LIST = MOCK_SO_LIST;
      GLOBAL_MOCK_SRS = MOCK_SRS;
      GLOBAL_ACTIVITY_EVENTS = ACTIVITY_EVENTS;
    }
    
    // Clear selected SP form if it was submitted
    if (selectedSP && srIds.includes(selectedSP)) {
      selectedSP = null;
      document.getElementById('sp-form-panel').innerHTML = `
        <div class="no-selection">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="1.5"/></svg>
          <p>Select an SR to populate SP form</p>
        </div>`;
    }
    
    // Re-render views
    renderSPList();
    renderKanban();
    renderSOGrid();
    
    // Update badges
    updateBadgesAndCounters();
    
    // Show Toast
    showToast(`✓ Successfully submitted ${completedSPs.length} Service Plans to IT system!`);
  });
};

function initNudgeCenter() {
  // Auto Nudge All
  const autoNudgeBtn = document.getElementById('auto-nudge-all-btn');
  if (autoNudgeBtn) {
    autoNudgeBtn.addEventListener('click', autoNudgeAll);
  }

  // Submit All Completed SPs
  const submitAllCompletedBtn = document.getElementById('submit-all-completed-btn');
  if (submitAllCompletedBtn) {
    submitAllCompletedBtn.addEventListener('click', window.submitAllCompletedSPs);
  }

  // Channel switch buttons
  document.getElementById('ch-whatsapp').addEventListener('click', () => setNudgeChannel('whatsapp'));
  document.getElementById('ch-teams').addEventListener('click',    () => setNudgeChannel('teams'));

  // Close modal
  document.getElementById('nudge-modal-close').addEventListener('click', () =>
    document.getElementById('nudge-modal-backdrop').classList.remove('open'));
  document.getElementById('nudge-cancel-btn').addEventListener('click', () =>
    document.getElementById('nudge-modal-backdrop').classList.remove('open'));
  document.getElementById('nudge-modal-backdrop').addEventListener('click', e => {
    if (e.target === document.getElementById('nudge-modal-backdrop'))
      document.getElementById('nudge-modal-backdrop').classList.remove('open');
  });

  // Send nudge
  document.getElementById('nudge-send-btn').addEventListener('click', sendNudge);

  // AI Regenerate
  document.getElementById('regenerate-msg-btn').addEventListener('click', () => {
    const textarea = document.getElementById('nudge-msg-textarea');
    textarea.style.opacity = '0.4';
    setTimeout(() => {
      textarea.value = buildNudgeMessage(currentNudgeSR, currentNudgeChan, NUDGE_AGENTS[currentNudgeSR]);
      textarea.style.opacity = '1';
      showToast('✨ Message regenerated by AI');
    }, 600);
  });

  // SP form Nudge button injection (also triggered from SP form)
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-nudge-sr]');
    if (btn) openNudgeModal(btn.dataset.nudgeSr);
  });
}

// ===================================================
// USER MANAGEMENT & ROLE SWITCHING ENGINE
// ===================================================

let currentUser = {
  role: null, // 'circle' or 'corporate'
  email: null,
  circle: null // 'Bihar' or 'All'
};

// Backup of corporate (global) mock data
const GLOBAL_MOCK_EMAILS = [...MOCK_EMAILS];
const GLOBAL_MOCK_SRS = [...MOCK_SRS];
const GLOBAL_MOCK_SO_LIST = [...MOCK_SO_LIST];
const GLOBAL_MOCK_RFI_LIST = [...MOCK_RFI_LIST];
const GLOBAL_MOCK_SLA_DATA = [...MOCK_SLA_DATA];
const GLOBAL_SP_PENDING = [...SP_PENDING];
const GLOBAL_SP_FORM_DATA = {...SP_FORM_DATA};
const GLOBAL_ACTIVITY_EVENTS = [...ACTIVITY_EVENTS];
const GLOBAL_CIRCLE_DATA = [...CIRCLE_DATA];
const GLOBAL_NUDGE_AGENTS = {...NUDGE_AGENTS};

// BIHAR CIRCLE DATASET
let BIHAR_EMAILS = [
  {
    id: 'E001',
    from: 'noc-infra-patna@jio.com',
    sender: 'Jio Bihar NOC',
    operator: 'Jio',
    subject: '[SP] New Site SP Request – BR-PAT-0234 | Patna West',
    time: '2026-05-26 09:14',
    priority: 'high',
    unread: true,
    body: `Dear Tower Co Team,

We request creation of a new Service Plan (SP) for the following Bihar site:

Site ID        : BR-PAT-0234
Tower Code     : JIO-BR-PAT-2234
Circle         : Bihar – Patna
Site Type      : Ground Mounted Tower (GMT)
Tower Height   : 45 meters
Tenant Count   : 1 (Initial)
Power Source   : EB + DG (Dual)
Earthing Type  : IS 3043
Latitude       : 25.5941° N
Longitude      : 85.1376° E
State          : Bihar
District       : Patna
Pincode        : 800001
RoW Status     : Approved
Permission Ref : PMC/2026/ROW/8812

Contact: Sunil Kumar | sunil.k@jio.com | +91-98012-XXXXX

SLA Reference  : P1 – 4 Hours
Raised By      : Patna NOC Desk
Ticket Ref     : JIO-PAT-2026-05-8812

Regards,
Jio Bihar Infrastructure Team`,
    extracted: {
      siteId: { val: 'BR-PAT-0234', conf: 99 },
      towerCode: { val: 'JIO-BR-PAT-2234', conf: 98 },
      circle: { val: 'Bihar – Patna', conf: 97 },
      operator: { val: 'Jio', conf: 99 },
      siteType: { val: 'Ground Mounted Tower (GMT)', conf: 96 },
      towerHeight: { val: '45 meters', conf: 98 },
      powerSource: { val: 'EB + DG (Dual)', conf: 95 },
      earthing: { val: 'IS 3043', conf: 94 },
      latitude: { val: '25.5941° N', conf: 99 },
      longitude: { val: '85.1376° E', conf: 99 },
      slaClass: { val: 'P1 – 4 Hours', conf: 98 },
      requestType: { val: 'SP Creation', conf: 97 }
    },
    srType: 'SP'
  },
  {
    id: 'E002',
    from: 'infra-ops-gaya@bhartiairtel.com',
    sender: 'Airtel Gaya Operations',
    operator: 'Airtel',
    subject: 'Service Order Ingest Request – SO#AIR-2026-88123 | Gaya',
    time: '2026-05-26 08:47',
    priority: 'high',
    unread: true,
    body: `Hi,

Please ingest the attached Gaya Service Order into the provisioning system.

SO Number      : AIR-2026-88123
SR Reference   : AIR-SR-0992
Site ID        : BR-GAY-0891
Circle         : Bihar – Gaya
Tenant Info    : Airtel 4G – Sector B
Antenna Config : 3-Sector / 12 TRX
Power Budget   : 6.5 kW
BTS Type       : Ericsson AIR6488
Installation   : Tower Top
Planned GoLive : 2026-06-12

Attachments: SO_AIR-2026-88123.pdf

SLA            : P2 – 8 Hours
Raised By      : Airtel Bihar OSS

Regards,
Airtel Gaya Infrastructure`,
    extracted: {
      soNumber: { val: 'AIR-2026-88123', conf: 99 },
      siteId: { val: 'BR-GAY-0891', conf: 98 },
      circle: { val: 'Bihar – Gaya', conf: 97 },
      operator: { val: 'Airtel', conf: 99 },
      tenantInfo: { val: 'Airtel 4G – Sector B', conf: 96 },
      btsType: { val: 'Ericsson AIR6488', conf: 95 },
      plannedGoLive: { val: '2026-06-12', conf: 98 },
      slaClass: { val: 'P2 – 8 Hours', conf: 97 },
      requestType: { val: 'SO Ingest', conf: 99 }
    },
    srType: 'SO'
  },
  {
    id: 'E003',
    from: 'noc-patna@vi.in',
    sender: 'Vi Patna NOC',
    operator: 'Vi',
    subject: '[SR] New Site Request – BR-MZF-0134 | Muzaffarpur',
    time: '2026-05-26 08:15',
    priority: 'high',
    unread: true,
    body: `Dear Tower Co Team,
    
We request creation of a new Service Request (SR) for the following Muzaffarpur site:

Site ID        : BR-MZF-0134
Circle         : Bihar – Muzaffarpur
Operator       : Vi
Site Type      : Ground Mounted Tower (GMT)
Tower Height   : 36 meters
Tenant Count   : 1
Power Source   : EB + DG (Backup)
Latitude       : 26.1209° N
Longitude      : 85.3647° E
State          : Bihar

SLA: P2 – 8 Hours
Regards,
Vi Patna NOC`,
    extracted: {
      siteId: { val: 'BR-MZF-0134', conf: 99 },
      circle: { val: 'Bihar – Muzaffarpur', conf: 97 },
      operator: { val: 'Vi', conf: 99 },
      siteType: { val: 'Ground Mounted Tower (GMT)', conf: 95 },
      towerHeight: { val: '36 meters', conf: 96 },
      requestType: { val: 'SR Intake', conf: 98 }
    },
    srType: 'SR'
  },
  {
    id: 'E004',
    from: 'tower-ops-bgp@bsnl.co.in',
    sender: 'BSNL Bhagalpur Ops',
    operator: 'BSNL',
    subject: '[SR Intake] New Site Request – BR-BGP-0045 | Bhagalpur Town',
    time: '2026-05-26 07:52',
    priority: 'high',
    unread: true,
    body: `Greetings,

This is a request for a new tower Service Request (SR) for our site:

Site ID        : BR-BGP-0045
Tower Code     : BSNL-BR-BGP-0045
Circle         : Bihar – Bhagalpur
Site Type      : Ground Mounted Tower (GMT)
Tenant Count   : 1 (BSNL)
Power Source   : EB + Solar
Latitude       : 25.2425° N
Longitude      : 86.9842° E

SLA: P1 – 4 Hours
Regards, BSNL Bihar Ops`,
    extracted: {
      siteId: { val: 'BR-BGP-0045', conf: 98 },
      towerCode: { val: 'BSNL-BR-BGP-0045', conf: 96 },
      circle: { val: 'Bihar – Bhagalpur', conf: 99 },
      operator: { val: 'BSNL', conf: 99 },
      siteType: { val: 'Ground Mounted Tower (GMT)', conf: 97 },
      requestType: { val: 'SR Intake', conf: 99 }
    },
    srType: 'SR'
  },
  {
    id: 'E005',
    from: 'noc-bihar@jio.com',
    sender: 'Jio Bihar NOC Desk',
    operator: 'Jio',
    subject: 'Service Order Ingest – SO#JIO-SO-2026-7788 | Darbhanga',
    time: '2026-05-25 18:30',
    priority: 'high',
    unread: true,
    body: `Hi Team,

Please ingest this Darbhanga Service Order:

SO Number      : JIO-SO-2026-7788
Site ID        : BR-DBG-0312
Circle         : Bihar – Darbhanga
Sharing Config : 2-tenant (Jio + Airtel)

SLA: P2 – 8 Hours
Regards, Jio Bihar NOC`,
    extracted: {
      soNumber: { val: 'JIO-SO-2026-7788', conf: 98 },
      siteId: { val: 'BR-DBG-0312', conf: 99 },
      circle: { val: 'Bihar – Darbhanga', conf: 97 },
      operator: { val: 'Jio', conf: 99 },
      requestType: { val: 'SO Ingest', conf: 96 }
    },
    srType: 'SO'
  }
];

const BIHAR_SRS = [
  { id: 'SR-2026-0911', type: 'SP', operator: 'Jio',    site: 'BR-PAT-0234', circle: 'Patna',    status: 'new',         slaHours: 4,  elapsed: 1.1,  priority: 'high' },
  { id: 'SR-2026-0910', type: 'SO', operator: 'Airtel', site: 'BR-GAY-0891', circle: 'Gaya',      status: 'in-progress', slaHours: 8,  elapsed: 2.5,  priority: 'high' },
  { id: 'SR-2026-0909', type: 'SP', operator: 'BSNL',   site: 'BR-BGP-0045', circle: 'Bhagalpur',status: 'new',         slaHours: 4,  elapsed: 3.8,  priority: 'high' },
  { id: 'SR-2026-0908', type: 'RFI',operator: 'Vi',     site: 'BR-MZF-0134', circle: 'Muzaffarpur',status: 'pending-info',slaHours: 8,  elapsed: 6.5,  priority: 'medium' },
  { id: 'SR-2026-0907', type: 'SO', operator: 'Jio',    site: 'BR-DBG-0312', circle: 'Darbhanga',status: 'in-progress', slaHours: 8,  elapsed: 2.2,  priority: 'medium' },
  { id: 'SR-2026-0906', type: 'SP', operator: 'Vi',     site: 'BR-PUR-0567', circle: 'Purnia',    status: 'pending-info',slaHours: 8,  elapsed: 5.1,  priority: 'medium' },
  { id: 'SR-2026-0905', type: 'SO', operator: 'Airtel', site: 'BR-ARA-0234', circle: 'Arrah',     status: 'complete',    slaHours: 8,  elapsed: 5.2,  priority: 'low' },
  { id: 'SR-2026-0904', type: 'SP', operator: 'Jio',    site: 'BR-BSR-0112', circle: 'Begusarai', status: 'complete',    slaHours: 4,  elapsed: 3.2,  priority: 'medium' }
];

const BIHAR_SO_LIST = [
  { soNum: 'AIR-2026-88123', srRef: 'SR-2026-0910', site: 'BR-GAY-0891', operator: 'Airtel', circle: 'Gaya', bts: 'Ericsson AIR6488', goLive: '2026-06-12', status: 'processing', progress: 75 },
  { soNum: 'JIO-SO-2026-7788', srRef: 'SR-2026-0907', site: 'BR-DBG-0312', operator: 'Jio', circle: 'Darbhanga', bts: 'Nokia AirScale', goLive: '2026-06-18', status: 'processing', progress: 45 },
  { soNum: 'VI-SO-2026-4401', srRef: 'SR-2026-0902', site: 'BR-SHR-0201', operator: 'Vi', circle: 'Bihar Sharif', bts: 'Huawei AAU5613', goLive: '2026-06-25', status: 'pending', progress: 15 },
  { soNum: 'JIO-SO-2026-7490', srRef: 'SR-2026-0904', site: 'BR-BSR-0112', operator: 'Jio', circle: 'Begusarai', bts: 'Ericsson RRUS', goLive: '2026-05-29', status: 'complete', progress: 100 },
  { soNum: 'AIR-2026-87812', srRef: 'SR-2026-0905', site: 'BR-ARA-0234', operator: 'Airtel', circle: 'Arrah', bts: 'Nokia AEQF', goLive: '2026-05-26', status: 'complete', progress: 100 }
];

const BIHAR_RFI_LIST = [
  { rfiNum: 'RFI-2026-0091', siteId: 'BR-PAT-0234', operator: 'Jio',    circle: 'Patna',    erectedType: 'GMT 45m', completionDate: '2026-05-25', powerSupply: 'EB 15kW Grid Live', structuralAudit: 'Certified', status: 'ready', equipmentStatus: 'awaiting', progress: 85 },
  { rfiNum: 'RFI-2026-0090', siteId: 'BR-GAY-0891', operator: 'Airtel', circle: 'Gaya',      erectedType: 'GMT 40m', completionDate: '2026-05-24', powerSupply: 'EB + DG Live',     structuralAudit: 'Certified', status: 'ready', equipmentStatus: 'installing', progress: 95 },
  { rfiNum: 'RFI-2026-0089', siteId: 'BR-BGP-0045', operator: 'BSNL',   circle: 'Bhagalpur',erectedType: 'GMT 40m', completionDate: '2026-05-23', powerSupply: 'EB Connection Live', structuralAudit: 'Certified', status: 'complete',equipmentStatus: 'installed', progress: 100 },
  { rfiNum: 'RFI-2026-0088', siteId: 'BR-PUR-0567', operator: 'Vi',     circle: 'Purnia',    erectedType: 'Guyed Mast', completionDate: '2026-05-26', powerSupply: 'DG Backup Live',structuralAudit: 'Certified', status: 'pending', equipmentStatus: 'awaiting', progress: 70 }
];

const BIHAR_SLA_DATA = [
  {
    srId: 'SR-2026-0909', site: 'BR-BGP-0045', operator: 'BSNL', circle: 'Bhagalpur',
    type: 'SP Creation', slaClass: 'P1', slaHours: 4, elapsed: 3.8, rag: 'amber',
    milestones: [
      { name: 'SR',          status: 'done',     time: '07:58' },
      { name: 'SP',          status: 'active',   time: 'In Review' },
      { name: 'SO',          status: 'pending',  time: '—' },
      { name: 'RFI',         status: 'pending',  time: '—' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0908', site: 'BR-MZF-0134', operator: 'Vi', circle: 'Muzaffarpur',
    type: 'RFI Response', slaClass: 'P2', slaHours: 8, elapsed: 6.5, rag: 'amber',
    milestones: [
      { name: 'SR',          status: 'done',     time: 'Yesterday' },
      { name: 'SP',          status: 'done',     time: 'Yesterday' },
      { name: 'SO',          status: 'done',     time: 'Yesterday' },
      { name: 'RFI',         status: 'active',   time: 'In Progress' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0911', site: 'BR-PAT-0234', operator: 'Jio', circle: 'Patna',
    type: 'SP Creation', slaClass: 'P1', slaHours: 4, elapsed: 1.1, rag: 'green',
    milestones: [
      { name: 'SR',          status: 'done',     time: '09:15' },
      { name: 'SP',          status: 'active',   time: 'In Review' },
      { name: 'SO',          status: 'pending',  time: '—' },
      { name: 'RFI',         status: 'pending',  time: '—' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  },
  {
    srId: 'SR-2026-0910', site: 'BR-GAY-0891', operator: 'Airtel', circle: 'Gaya',
    type: 'SO Ingest', slaClass: 'P2', slaHours: 8, elapsed: 2.5, rag: 'green',
    milestones: [
      { name: 'SR',          status: 'done',     time: '08:48' },
      { name: 'SP',          status: 'done',     time: '08:49' },
      { name: 'SO',          status: 'active',   time: 'Processing' },
      { name: 'RFI',         status: 'pending',  time: '—' },
      { name: 'Site on Air', status: 'pending',  time: '—' }
    ]
  }
];

const BIHAR_SP_PENDING = [
  { srId: 'SR-2026-0911', site: 'BR-PAT-0234', operator: 'Jio',    circle: 'Patna',    missing: 0 },
  { srId: 'SR-2026-0909', site: 'BR-BGP-0045', operator: 'BSNL',   circle: 'Bhagalpur',missing: 1 },
  { srId: 'SR-2026-0906', site: 'BR-PUR-0567', operator: 'Vi',     circle: 'Purnia',    missing: 2 }
];

const BIHAR_SP_FORM_DATA = {
  'SR-2026-0911': {
    siteId: 'BR-PAT-0234', towerCode: 'JIO-BR-PAT-2234', circle: 'Bihar – Patna',
    operator: 'Jio', siteType: 'Ground Mounted Tower (GMT)', towerHeight: '45',
    tenantCount: '1', powerSource: 'EB + DG (Dual)', earthing: 'IS 3043',
    latitude: '25.5941', longitude: '85.1376', state: 'Bihar',
    district: 'Patna', pincode: '800001', rowRef: 'PMC/2026/ROW/8812',
    structuralReport: '', slaClass: 'P1 – 4 Hours',
    ownerId: '154453', globalId: 'GB-00053', srTypeColocNew: 'Colocation', srDate: '22-May',
    siteName: 'Patna West', customerName: 'Jio', regionZoneBilling: 'East', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P1', countOduIdu: '1',
    countAntennas: '2', countMwAntenna: '1', diaMw: '0.6', weightMw: '15', mwAzimuth: '180.2'
  },
  'SR-2026-0909': {
    siteId: 'BR-BGP-0045', towerCode: 'BSNL-BR-BGP-0045', circle: 'Bihar – Bhagalpur',
    operator: 'BSNL', siteType: 'Ground Mounted Tower (GMT)', towerHeight: '40',
    tenantCount: '1', powerSource: 'EB + Solar', earthing: 'IS 3043',
    latitude: '25.2425', longitude: '86.9842', state: 'Bihar',
    district: 'Bhagalpur', pincode: '812001', rowRef: '', structuralReport: '',
    slaClass: 'P1 – 4 Hours',
    ownerId: '154454', globalId: 'GB-00054', srTypeColocNew: 'Colocation', srDate: '22-May',
    siteName: 'Bhagalpur Town', customerName: 'BSNL', regionZoneBilling: 'East', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P2', countOduIdu: '2',
    countAntennas: '3', countMwAntenna: '1', diaMw: '0.6', weightMw: '15', mwAzimuth: '224.23'
  },
  'SR-2026-0906': {
    siteId: 'BR-PUR-0567', towerCode: 'VI-BR-PUR-0567', circle: 'Bihar – Purnia',
    operator: 'Vi', siteType: 'Guyed Mast', towerHeight: '36',
    tenantCount: '', powerSource: 'EB only', earthing: 'IS 3043',
    latitude: '25.7771', longitude: '87.4752', state: 'Bihar',
    district: 'Purnia', pincode: '', rowRef: '', structuralReport: '',
    slaClass: 'P2 – 8 Hours',
    ownerId: '154455', globalId: 'GB-00055', srTypeColocNew: 'Colocation', srDate: '23-May',
    siteName: 'Purnia East', customerName: 'Vi', regionZoneBilling: 'East', networkTech: 'LTE',
    srTypeSpecific: 'Coloc', slaType: 'Hours', slaTypeDesc: 'Standard P2', countOduIdu: '3',
    countAntennas: '3', countMwAntenna: '2', diaMw: '0.6', weightMw: '15', mwAzimuth: '110.15'
  }
};

const BIHAR_ACTIVITY_EVENTS = [
  { msg: '<strong>AI extracted</strong> Bihar SR from Jio email – SR-2026-0911 created', color: '#6366f1', time: '09:15' },
  { msg: '<strong>SP form auto-populated</strong> for BR-PAT-0234 | 12 fields active', color: '#22c55e', time: '09:16' },
  { msg: '<strong>RFI auto-drafted</strong> for BR-PUR-0567 – 2 missing fields detected', color: '#f59e0b', time: '09:10' },
  { msg: '<strong>SO ingestion started</strong> – AIR-2026-88123 | Gaya | 75% complete', color: '#3b82f6', time: '08:52' },
  { msg: '<strong>RFI response received</strong> from Vi – BR-MZF-0134 data ingested', color: '#14b8a6', time: '08:18' },
  { msg: '<strong>SR-2026-0904 closed</strong> – Jio Begusarai SP completed within SLA', color: '#22c55e', time: '07:45' }
];

const BIHAR_CIRCLE_DATA = [
  { circle: 'Patna', total: 24, auto: 22, sla: '95%', tat: '3.5h', breaches: 0 },
  { circle: 'Gaya', total: 18, auto: 16, sla: '92%', tat: '4.1h', breaches: 1 },
  { circle: 'Muzaffarpur', total: 15, auto: 13, sla: '90%', tat: '4.8h', breaches: 1 },
  { circle: 'Bhagalpur', total: 12, auto: 11, sla: '94%', tat: '3.9h', breaches: 0 },
  { circle: 'Darbhanga', total: 10, auto: 9, sla: '96%', tat: '3.4h', breaches: 0 },
  { circle: 'Purnia', total: 8, auto: 7, sla: '88%', tat: '5.2h', breaches: 1 },
  { circle: 'Begusarai', total: 6, auto: 6, sla: '100%', tat: '2.8h', breaches: 0 }
];

const BIHAR_NUDGE_AGENTS = {
  'SR-2026-0911': { name: 'Ramesh Yadav',    phone: '+91-98012-11234', email: 'r.yadav@towerco.in', role: 'Site Engineer', circle: 'Patna',    teamsId: 'ramesh.yadav@towerco.in',  missing: ['RoW Approval Ref'], channel: 'whatsapp', status: 'pending' },
  'SR-2026-0909': { name: 'Alok Sinha',      phone: '+91-99055-45678', email: 'a.sinha@towerco.in', role: 'Field Supervisor', circle: 'Bhagalpur', teamsId: 'alok.sinha@towerco.in',    missing: ['RoW Approval Ref', 'Structural Report #'], channel: 'teams',    status: 'pending' },
  'SR-2026-0906': { name: 'Deepa Kumari',    phone: '+91-97080-78901', email: 'd.kumari@towerco.in', role: 'Site Coordinator', circle: 'Purnia',    teamsId: 'deepa.kumari@towerco.in', missing: ['RoW Approval Ref', 'Pincode'], channel: 'whatsapp', status: 'pending' }
};

// ROLE SWITCHER ENGINE
function switchUserRole(role) {
  if (role === 'circle') {
    MOCK_EMAILS = BIHAR_EMAILS;
    MOCK_SRS = BIHAR_SRS;
    MOCK_SO_LIST = BIHAR_SO_LIST;
    MOCK_RFI_LIST = BIHAR_RFI_LIST;
    MOCK_SLA_DATA = BIHAR_SLA_DATA;
    SP_PENDING = BIHAR_SP_PENDING;
    SP_FORM_DATA = BIHAR_SP_FORM_DATA;
    ACTIVITY_EVENTS = BIHAR_ACTIVITY_EVENTS;
    CIRCLE_DATA = BIHAR_CIRCLE_DATA;
    NUDGE_AGENTS = BIHAR_NUDGE_AGENTS;
    
    // Update user profile cards
    document.getElementById('sidebar-name').textContent = 'Bihar Operations';
    document.getElementById('sidebar-role').textContent = 'Circle Sales Manager';
    document.getElementById('sidebar-avatar').textContent = 'BS';
    
    const badge = document.getElementById('user-role-badge');
    badge.className = 'user-role-badge circle';
    badge.textContent = '📍 Bihar Circle';
    
    document.getElementById('dashboard-title').textContent = 'Bihar Circle Operations';
    document.getElementById('dashboard-subtitle').textContent = 'Bihar Telecom Circle | AI-powered SR Automation Dashboard';
    
    document.getElementById('perf-table-title').textContent = 'District-wise Performance';
    document.getElementById('perf-col1').textContent = 'District';

    // Hide Dashboard nav item
    const navDash = document.getElementById('nav-dashboard');
    if (navDash) navDash.style.display = 'none';
    
    // Hide OVERVIEW header label
    document.querySelectorAll('.nav-section-label').forEach(el => {
      if (el.textContent === 'OVERVIEW') {
        el.style.display = 'none';
      }
    });

    // Show Email (Inbox) nav and INTAKE label for circle users
    const navInbox = document.getElementById('nav-inbox');
    if (navInbox) navInbox.style.display = 'flex';
    document.querySelectorAll('.nav-section-label').forEach(el => {
      if (el.textContent === 'INTAKE') {
        el.style.display = 'block';
      }
    });
  } else {
    MOCK_EMAILS = GLOBAL_MOCK_EMAILS;
    MOCK_SRS = GLOBAL_MOCK_SRS;
    MOCK_SO_LIST = GLOBAL_MOCK_SO_LIST;
    MOCK_RFI_LIST = GLOBAL_MOCK_RFI_LIST;
    MOCK_SLA_DATA = GLOBAL_MOCK_SLA_DATA;
    SP_PENDING = GLOBAL_SP_PENDING;
    SP_FORM_DATA = GLOBAL_SP_FORM_DATA;
    ACTIVITY_EVENTS = GLOBAL_ACTIVITY_EVENTS;
    CIRCLE_DATA = GLOBAL_CIRCLE_DATA;
    NUDGE_AGENTS = GLOBAL_NUDGE_AGENTS;
    
    // Update user profile cards
    document.getElementById('sidebar-name').textContent = 'Amit Sharma';
    document.getElementById('sidebar-role').textContent = 'National Sales Ops';
    document.getElementById('sidebar-avatar').textContent = 'AS';
    
    const badge = document.getElementById('user-role-badge');
    badge.className = 'user-role-badge corporate';
    badge.textContent = '🏢 Corporate Sales';
    
    document.getElementById('dashboard-title').textContent = 'Operations Dashboard';
    document.getElementById('dashboard-subtitle').textContent = 'AI-powered SR automation | Telecom Tower Infrastructure';
    
    document.getElementById('perf-table-title').textContent = 'Circle-wise Performance';
    document.getElementById('perf-col1').textContent = 'Circle';

    // Show Dashboard nav item
    const navDash = document.getElementById('nav-dashboard');
    if (navDash) navDash.style.display = 'flex';
    
    // Show OVERVIEW header label
    document.querySelectorAll('.nav-section-label').forEach(el => {
      if (el.textContent === 'OVERVIEW') {
        el.style.display = 'block';
      }
    });

    // Hide Email (Inbox) nav and INTAKE label for corporate users
    const navInbox = document.getElementById('nav-inbox');
    if (navInbox) navInbox.style.display = 'none';
    document.querySelectorAll('.nav-section-label').forEach(el => {
      if (el.textContent === 'INTAKE') {
        el.style.display = 'none';
      }
    });
  }

  // Refresh lists & boards
  renderEmailList();
  renderKanban();
  renderSPList();
  renderSOGrid();
  renderRFIView();
  renderSLAList();
  renderActivityFeed();
  renderBreachList();
  
  // Re-fill form panel placeholder if anything selected
  const spFormPanel = document.getElementById('sp-form-panel');
  if (spFormPanel) {
    spFormPanel.innerHTML = `
      <div class="no-selection">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="1.5"/></svg>
        <p>Select an SR to populate SP form</p>
      </div>`;
  }
  
  // Refresh badges & KPIs
  updateBadgesAndCounters();
  
  // Recreate chart contexts
  recreateAllCharts();

  // Navigate to appropriate view
  navigateTo(role === 'circle' ? 'inbox' : 'dashboard');
}

// Recalculates all system badges, KPI figures, progress ratios & lists
function updateBadgesAndCounters() {
  // Update Inbox Badge
  const unreadEmails = MOCK_EMAILS.filter(e => e.unread).length;
  const navBadgeEmails = document.getElementById('nav-badge-emails');
  if (navBadgeEmails) {
    navBadgeEmails.textContent = unreadEmails;
    navBadgeEmails.style.display = unreadEmails > 0 ? 'inline-block' : 'none';
  }
  const inboxCountLabel = document.getElementById('inbox-count-label');
  if (inboxCountLabel) {
    inboxCountLabel.textContent = `Inbox (${unreadEmails} unread)`;
  }
  
  // Update Breaches Badge
  const breachesCount = MOCK_SRS.filter(s => {
    const pct = s.elapsed / s.slaHours;
    return pct >= 1 && s.status !== 'complete';
  }).length;
  const navBadgeBreaches = document.getElementById('nav-badge-breaches');
  if (navBadgeBreaches) {
    navBadgeBreaches.textContent = breachesCount;
    navBadgeBreaches.style.display = breachesCount > 0 ? 'inline-block' : 'none';
  }
  const navBadgeSLA = document.getElementById('nav-badge-sla');
  if (navBadgeSLA) {
    navBadgeSLA.textContent = breachesCount;
    navBadgeSLA.style.display = breachesCount > 0 ? 'inline-block' : 'none';
  }
  const breachCountHeader = document.getElementById('breach-count');
  if (breachCountHeader) {
    breachCountHeader.textContent = `${breachesCount} Active`;
  }
  
  // Update Nudges Badge
  const pendingNudges = Object.values(NUDGE_AGENTS).filter(a => a.status === 'pending').length;
  const navBadgeNudge = document.getElementById('nav-badge-nudge');
  if (navBadgeNudge) {
    navBadgeNudge.textContent = pendingNudges;
    navBadgeNudge.style.display = pendingNudges > 0 ? 'inline-block' : 'none';
  }
  const nudgeBannerText = document.getElementById('nudge-banner-text');
  if (nudgeBannerText) {
    nudgeBannerText.innerHTML = `<strong>${pendingNudges} SRs</strong> have missing information requiring field agent follow-up.`;
  }
  
  // Update SP counts
  const spPendingCount = SP_PENDING.length;
  const spCountLabel = document.getElementById('sp-count-label');
  if (spCountLabel) {
    spCountLabel.textContent = `Pending SP Creation (${spPendingCount})`;
  }

  // Update RFI Badge
  const pendingRFIsCount = MOCK_RFI_LIST.filter(r => r.status === 'ready').length;
  const navBadgeRFI = document.getElementById('nav-badge-rfi');
  if (navBadgeRFI) {
    navBadgeRFI.textContent = pendingRFIsCount;
    navBadgeRFI.style.display = pendingRFIsCount > 0 ? 'inline-block' : 'none';
  }
  
  // Recalculate KPIs
  const kpis = {
    totalSRs: MOCK_SRS.length,
    autoProcessed: Math.round((MOCK_SRS.filter(s => s.status === 'complete').length / MOCK_SRS.length) * 100),
    slaCompliance: Math.round((MOCK_SRS.filter(s => (s.elapsed / s.slaHours) < 1).length / MOCK_SRS.length) * 100)
  };
  
  const kpiGrid = document.getElementById('kpi-grid');
  if (kpiGrid) {
    const totalBreaches = breachesCount;
    const pendingRFIs = Object.values(NUDGE_AGENTS).filter(a => a.status === 'pending').length;
    const avgTAT = currentUser.role === 'circle' ? '3.5h' : '4.1h';
    
    kpiGrid.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-icon purple">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div>
          <div class="kpi-value" data-target="${kpis.totalSRs}">${kpis.totalSRs}</div>
          <div class="kpi-label">Total Requests</div>
          <div class="kpi-change up">↑ 12% this week</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon teal">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div>
          <div class="kpi-value" data-target="${kpis.autoProcessed}" data-suffix="%">${kpis.autoProcessed}%</div>
          <div class="kpi-label">Auto Ingested</div>
          <div class="kpi-change up">↑ 4.2% AI accuracy</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M22 12A10 10 0 0112 22" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div>
          <div class="kpi-value" data-target="${kpis.slaCompliance}" data-suffix="%">${kpis.slaCompliance}%</div>
          <div class="kpi-label">SLA Compliance</div>
          <div class="kpi-change up">↑ 1.5% SLA track</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon blue">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div>
          <div class="kpi-value" style="font-size: 26px;">${avgTAT}</div>
          <div class="kpi-label">Avg resolution TAT</div>
          <div class="kpi-change down">↓ 12 mins lower</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon orange">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div>
          <div class="kpi-value" data-target="${pendingRFIs}">${pendingRFIs}</div>
          <div class="kpi-label">Pending RFIs</div>
          <div class="kpi-change neutral">→ Active queue</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon red">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div>
          <div class="kpi-value" data-target="${totalBreaches}" style="color: ${totalBreaches > 0 ? 'var(--red)' : 'var(--green)'};">${totalBreaches}</div>
          <div class="kpi-label">SLA Breaches</div>
          <div class="kpi-change" style="color: ${totalBreaches > 0 ? 'var(--red)' : 'var(--green)'};">${totalBreaches > 0 ? 'Escalated to circle' : 'No active breaches'}</div>
        </div>
      </div>
    `;
    animateCounters();
  }
}

// Chart swapper
function recreateAllCharts() {
  if (charts.operator) { charts.operator.destroy(); charts.operator = null; }
  if (charts.type) { charts.type.destroy(); charts.type = null; }
  if (charts.slaTrend) { charts.slaTrend.destroy(); charts.slaTrend = null; }
  if (charts.aiAcc) { charts.aiAcc.destroy(); charts.aiAcc = null; }
  if (charts.rfiAging) { charts.rfiAging.destroy(); charts.rfiAging = null; }
  if (charts.tat) { charts.tat.destroy(); charts.tat = null; }

  if (currentView === 'dashboard') {
    renderDashboardCharts();
  }
  if (currentView === 'analytics') {
    renderAnalyticsCharts();
  }
}

// AUTO FILL TRIGGER FROM LOGIN BUTTONS
window.fillCreds = function(role) {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const errorBox = document.getElementById('login-error-box');
  
  if (errorBox) errorBox.style.display = 'none';
  
  if (role === 'circle') {
    if (emailInput) emailInput.value = 'sales.bihar@ai.com';
    if (passwordInput) passwordInput.value = 'abc123';
  } else if (role === 'corporate') {
    if (emailInput) emailInput.value = 'sales.corporate@ai.com';
    if (passwordInput) passwordInput.value = 'abc123';
  }
};

// LOGIN LOGIC INITIALIZER
function initLogin() {
  const form = document.getElementById('login-form');
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const errorBox = document.getElementById('login-error-box');
  const errorText = document.getElementById('login-error-text');
  const submitBtn = document.getElementById('login-submit');
  const submitText = document.getElementById('login-submit-text');
  const spinner = document.getElementById('login-spinner');
  const arrow = document.getElementById('login-submit-arrow');
  const pwToggle = document.getElementById('login-pw-toggle');
  
  // Toggle password visibility
  if (pwToggle && passwordInput) {
    pwToggle.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      pwToggle.innerHTML = type === 'password'
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" stroke-width="2"/><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2"/></svg>`;
    });
  }
  
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      
      const email = emailInput.value.trim().toLowerCase();
      const password = passwordInput.value;
      
      if (errorBox) errorBox.style.display = 'none';
      
      let role = null;
      if (email === 'sales.bihar@ai.com' && password === 'abc123') {
        role = 'circle';
      } else if (email === 'sales.corporate@ai.com' && password === 'abc123') {
        role = 'corporate';
      }
      
      if (!role) {
        if (errorBox && errorText) {
          errorText.textContent = 'Invalid Login ID or Password. Please try again.';
          errorBox.style.display = 'flex';
          
          // Trigger shake animation again
          errorBox.style.animation = 'none';
          errorBox.offsetHeight; // Trigger reflow
          errorBox.style.animation = 'shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
        }
        return;
      }
      
      // Valid Credentials - Loading state
      if (submitBtn) submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'Verifying...';
      if (spinner) spinner.style.display = 'block';
      if (arrow) arrow.style.display = 'none';
      
      setTimeout(() => {
        // Clear password
        if (passwordInput) passwordInput.value = '';
        
        // Hide spinner & unlock button
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = 'Sign In';
        if (spinner) spinner.style.display = 'none';
        if (arrow) arrow.style.display = 'block';
        
        // Hide login screen
        const loginScreen = document.getElementById('login-screen');
        if (loginScreen) {
          loginScreen.classList.add('hidden');
        }
        
        // Set user role and context
        currentUser.role = role;
        currentUser.email = email;
        currentUser.circle = role === 'circle' ? 'Bihar' : 'All';
        
        // Swapping dataset
        switchUserRole(role);
        
        showToast(`✓ Signed in as ${role === 'circle' ? 'Bihar Circle' : 'Corporate'} Sales Ops`);
      }, 1500);
    });
  }
  
  // Logout Button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      const loginScreen = document.getElementById('login-screen');
      if (loginScreen) {
        loginScreen.classList.remove('hidden');
      }
      
      // Reset variables
      currentUser.role = null;
      currentUser.email = null;
      currentUser.circle = null;
      
      showToast('Logged out successfully');
    });
  }
}

// ===================================================
// THEME SWITCHER (DARK / LIGHT MODE)
// ===================================================
function updateThemeIcon(isLight) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.innerHTML = isLight
    ? `<svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  // Read current system/cached preference, default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('light-theme');
    updateThemeIcon(false);
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
    
    // Live-refresh charts using new theme constants
    recreateAllCharts();
    
    showToast(`✓ Theme switched to ${isLight ? 'Light' : 'Dark'} Mode`);
  });
}

// ===================================================
// GRID / ROW VIEW TOGGLES
// ===================================================
function initViewToggles() {
  const srToggle = document.getElementById('sr-view-toggle');
  if (srToggle) {
    const buttons = srToggle.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--text-secondary)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--accent)';
        btn.style.color = 'white';
        srViewStyle = btn.dataset.style;
        renderKanban();
      });
    });
  }

  const soToggle = document.getElementById('so-view-toggle');
  if (soToggle) {
    const buttons = soToggle.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--text-secondary)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--accent)';
        btn.style.color = 'white';
        soViewStyle = btn.dataset.style;
        renderSOGrid();
      });
    });
  }

  const rfiToggle = document.getElementById('rfi-view-toggle');
  if (rfiToggle) {
    const buttons = rfiToggle.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--text-secondary)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--accent)';
        btn.style.color = 'white';
        rfiViewStyle = btn.dataset.style;
        renderRFIView();
      });
    });
  }
}

function generateRemainingEmails(baseList, isBihar = false) {
  const operators = ['Jio', 'Airtel', 'Vi', 'BSNL'];
  const subjects = [
    'Monthly Site Performance Review',
    'Fiber Optic Feasibility Report',
    'DG Fuel Ingest Log - Weekly',
    'Earthing Value Audit Checklist',
    'Security Clearance Declaration',
    'Structural Stability Certificate Approved',
    'Power Connection Update - Grid energization',
    'Operator Tenancy Agreement Signed',
    'Tower Load Audit Complete',
    'NOC Access Permission Approved'
  ];
  
  const emails = [...baseList];
  
  // Ensure the top 5 are exactly the specified 5 priority ones, set them as unread, and assign varied priorities
  const priorities = ['high', 'medium', 'high', 'low', 'medium'];
  for (let i = 0; i < 5; i++) {
    if (emails[i]) {
      emails[i].unread = true;
      emails[i].priority = priorities[i];
    }
  }

  // Set the remaining base emails as read/registered
  for (let i = 5; i < emails.length; i++) {
    emails[i].unread = false;
    emails[i].priority = 'low';
  }

  // Generate up to 50
  for (let i = emails.length; i < 50; i++) {
    const id = `E${String(i + 1).padStart(3, '0')}`;
    const op = operators[i % operators.length];
    const sub = subjects[i % subjects.length];
    const circle = isBihar ? 'Bihar Circle' : 'National Operations';
    const siteId = isBihar ? `BR-PAT-0${100 + i}` : `MH-MUM-0${100 + i}`;
    
    emails.push({
      id: id,
      from: `infra-ops@${op.toLowerCase()}.com`,
      sender: `${op} Infra Desk`,
      operator: op,
      subject: `${sub} - Site ${siteId}`,
      time: `2026-05-${Math.max(1, 26 - Math.floor(i/2))} 10:${String(10 + (i%50)).padStart(2, '0')}`,
      priority: 'low',
      unread: false,
      body: `Hi Team,\n\nThis is a completed automated report for site ${siteId} in the ${circle}.\n\nAll AI extractions have been validated and registered in the solution.\n\nRegards,\n${op} Operations`,
      extracted: {
        siteId: { val: siteId, conf: 99 },
        circle: { val: circle, conf: 98 },
        operator: { val: op, conf: 99 },
        requestType: { val: 'System Audit', conf: 96 }
      },
      srType: 'SR'
    });
  }
  return emails;
}

function initAITechDrawer() {
  const toggle = document.getElementById('ai-tech-toggle');
  const bar = document.getElementById('ai-tech-bar');
  if (toggle && bar) {
    toggle.addEventListener('click', () => {
      bar.classList.toggle('collapsed');
      bar.classList.toggle('expanded');
    });
  }
}

// ===================================================
// INIT – updated to include theme & login
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
  // Generate the full laundry list of 50 emails
  MOCK_EMAILS = generateRemainingEmails(MOCK_EMAILS, false);
  BIHAR_EMAILS = generateRemainingEmails(BIHAR_EMAILS, true);
  
  // Re-sync backups
  GLOBAL_MOCK_EMAILS.length = 0;
  GLOBAL_MOCK_EMAILS.push(...MOCK_EMAILS);

  initLogin();
  initThemeToggle();
  initViewToggles();
  initNavigation();
  initAITechDrawer();
  updateClock();
  setInterval(updateClock, 1000);
  renderActivityFeed();
  renderBreachList();
  renderEmailList();
  renderKanban();
  renderSPList();
  renderSOGrid();
  renderRFIView();
  renderSLAList();
  initSLAFilters();
  initRunAIBtn();
  initNotifications();
  initSearch();
  initNudgeCenter();
  updateBadgesAndCounters();
  simulateLiveActivity();
  initSRDetailModal();
  setTimeout(renderDashboardCharts, 300);
});

window.openSRDetailModal = function(srId) {
  const sr = MOCK_SRS.find(s => s.id === srId);
  if (!sr) return;

  const spDetails = SP_FORM_DATA[srId] || {};
  const priorityLabel = sr.priority.charAt(0).toUpperCase() + sr.priority.slice(1);

  document.getElementById('sr-modal-badge-id').textContent = sr.id;
  document.getElementById('sr-modal-title-site').textContent = `${sr.site} | ${sr.circle}`;
  document.getElementById('sr-modal-subtitle-details').textContent = `${sr.operator} · ${priorityLabel} Priority · SLA: ${sr.slaHours}h`;

  const grid = document.getElementById('sr-modal-grid-fields');
  grid.innerHTML = '';

  const fields = [
    { label: 'Owner ID', value: spDetails.ownerId },
    { label: 'Global ID', value: spDetails.globalId },
    { label: 'Circle', value: spDetails.circle || sr.circle },
    { label: 'SR Type (Coloc/Newsite)', value: spDetails.srTypeColocNew },
    { label: 'SR Date', value: spDetails.srDate },
    { label: 'Installation Period', value: spDetails.installationPeriod },
    { label: 'Town / Portal', value: spDetails.townPortal },
    { label: 'Site Name', value: spDetails.siteName || sr.site },
    { label: 'Customer ID', value: spDetails.customerId },
    { label: 'Customer Name', value: spDetails.customerName || sr.operator },
    { label: 'Site ID', value: spDetails.siteId || sr.site },
    { label: 'Region / Zone (as per billing)', value: spDetails.regionZoneBilling },
    { label: 'Network technology', value: spDetails.networkTech },
    { label: 'SR Type (Coloc / New Site / Swap)', value: spDetails.srTypeSpecific },
    { label: 'SLA Type (Hours / Days / Weeks)', value: spDetails.slaType },
    { label: 'SLA Type Description', value: spDetails.slaTypeDesc || sr.slaClass },
    { label: 'NOC Required', value: spDetails.nocRequired },
    { label: 'Weight of the Antenna', value: spDetails.weightAntenna },
    { label: 'ODU/IDU / Outdoor / Indoor', value: spDetails.oduIduLocation },
    { label: 'ODU Type / Model & Dimension (L*W*D)', value: spDetails.oduDimension },
    { label: 'ODU Weight', value: spDetails.oduWeight },
    { label: 'Base Space (sqm / sqft)', value: spDetails.baseSpace },
    { label: 'R-Space', value: spDetails.rSpace },
    { label: 'Space details on ground', value: spDetails.spaceGround },
    { label: 'Space details on Roof', value: spDetails.spaceRoof },
    { label: 'Count of ODU/IDU integrated', value: spDetails.countOduIdu },
    { label: 'Weight of the Equipment', value: spDetails.weightEquipment },
    { label: 'Power Load in kW', value: spDetails.powerLoadKw },
    { label: 'Equipment 1 Dimension (L*W*D)', value: spDetails.equipDimension },
    { label: 'Equipment Azimuth', value: spDetails.equipAzimuth },
    { label: 'Equipment Height', value: spDetails.equipHeight },
    { label: 'Antenna Type (Joint sharing / indep)', value: spDetails.antennaType },
    { label: 'Count of Telecom Antennas', value: spDetails.countAntennas },
    { label: 'Weight of the Antenna', value: spDetails.antennaWeight },
    { label: 'Antenna Dimension (L*W*D)', value: spDetails.antennaDimension },
    { label: 'Antenna Azimuth', value: spDetails.antennaAzimuth },
    { label: 'Antenna Height', value: spDetails.antennaHeight },
    { label: 'Count of MW Antenna', value: spDetails.countMwAntenna },
    { label: 'Dia of MW (m)', value: spDetails.diaMw },
    { label: 'Weight of MW', value: spDetails.weightMw },
    { label: 'MW Azimuth', value: spDetails.mwAzimuth },
    { label: 'Tech Space', value: spDetails.techSpace },
    { label: 'Power load in kW', value: spDetails.powerLoadMwKw },
    { label: 'MW Antenna Height', value: spDetails.mwAntennaHeight },
    { label: 'Tower Code', value: spDetails.towerCode },
    { label: 'Site Type', value: spDetails.siteType },
    { label: 'Tower Height (m)', value: spDetails.towerHeight ? `${spDetails.towerHeight}m` : null },
    { label: 'Power Infrastructure', value: spDetails.powerSource },
    { label: 'Earthing Standard', value: spDetails.earthing },
    { label: 'Latitude Location', value: spDetails.latitude },
    { label: 'Longitude Location', value: spDetails.longitude },
    { label: 'State Region', value: spDetails.state },
    { label: 'District Jurisdiction', value: spDetails.district },
    { label: 'Postal Pincode', value: spDetails.pincode },
    { label: 'RoW Reference', value: spDetails.rowRef },
    { label: 'Structural Report', value: spDetails.structuralReport }
  ];

  fields.forEach(f => {
    if (f.value !== undefined && f.value !== null && f.value !== '' && f.value !== '—') {
      const fieldHtml = `
        <div style="background: var(--bg-input); border: 1px solid var(--border-light); padding: 12px; border-radius: var(--radius-sm); display: flex; flex-direction: column; gap: 4px; transition: all 0.2s ease;">
          <span style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">${f.label}</span>
          <span style="font-size: 13px; font-weight: 600; color: var(--text-primary); font-family: var(--font-mono);">${f.value}</span>
        </div>
      `;
      grid.insertAdjacentHTML('beforeend', fieldHtml);
    }
  });

  const actionBtn = document.getElementById('sr-modal-action-btn');
  if (sr.status === 'complete') {
    actionBtn.style.display = 'none';
  } else {
    actionBtn.style.display = 'flex';
    let actionLabel = '✓ Ingest to In-Progress';
    if (sr.status === 'in-progress') actionLabel = '⚡ Request Field RFI';
    if (sr.status === 'pending-info') actionLabel = '✓ Complete Service Plan';
    
    actionBtn.textContent = actionLabel;
    
    actionBtn.onclick = () => {
      showAIOverlay(`Autonomous Ingestion: Advancing ${sr.id} state...`, () => {
        if (sr.status === 'new') {
          sr.status = 'in-progress';
          showToast(`✓ ${sr.id} status updated to In Progress`);
        } else if (sr.status === 'in-progress') {
          sr.status = 'pending-info';
          showToast(`✓ ${sr.id} status updated to Pending Info (RFI dispatched)`);
        } else if (sr.status === 'pending-info') {
          sr.status = 'complete';
          showToast(`✓ ${sr.id} status updated to Completed!`);
        }
        
        // Re-sync backups
        if (MOCK_SRS === BIHAR_SRS) {
          BIHAR_SRS.length = 0;
          BIHAR_SRS.push(...MOCK_SRS);
        } else {
          GLOBAL_MOCK_SRS.length = 0;
          GLOBAL_MOCK_SRS.push(...MOCK_SRS);
        }

        renderKanban();
        updateBadgesAndCounters();
        document.getElementById('sr-detail-modal-backdrop').classList.remove('open');
      });
    };
  }

  document.getElementById('sr-detail-modal-backdrop').classList.add('open');
};

function initSRDetailModal() {
  const closeBackdrop = document.getElementById('sr-detail-modal-backdrop');
  const closeBtn = document.getElementById('sr-detail-modal-close');
  const closeFooterBtn = document.getElementById('sr-modal-close-btn');

  const closeFn = () => {
    closeBackdrop.classList.remove('open');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeFn);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeFn);
  if (closeBackdrop) {
    closeBackdrop.addEventListener('click', e => {
      if (e.target === closeBackdrop) closeFn();
    });
  }
}

window.ingestSRState = function(srId) {
  const sr = MOCK_SRS.find(s => s.id === srId);
  if (!sr) return;

  showAIOverlay(`Autonomous Ingestion: Advancing ${sr.id} state...`, () => {
    if (sr.status === 'new') {
      sr.status = 'in-progress';
      showToast(`✓ ${sr.id} status updated to In Progress`);
    } else if (sr.status === 'in-progress') {
      sr.status = 'pending-info';
      showToast(`✓ ${sr.id} status updated to Pending Info (RFI dispatched)`);
    } else if (sr.status === 'pending-info') {
      sr.status = 'complete';
      showToast(`✓ ${sr.id} status updated to Completed!`);
    }
    
    // Re-sync backups
    if (MOCK_SRS === BIHAR_SRS) {
      BIHAR_SRS.length = 0;
      BIHAR_SRS.push(...MOCK_SRS);
    } else {
      GLOBAL_MOCK_SRS.length = 0;
      GLOBAL_MOCK_SRS.push(...MOCK_SRS);
    }

    renderKanban();
    updateBadgesAndCounters();
  });
};


