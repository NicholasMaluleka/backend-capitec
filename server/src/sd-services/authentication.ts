// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { FileInService } from '../utils/ndefault-file/FileIn/FileInService'; //_splitter_
import { FileOutService } from '../utils/ndefault-file/FileOut/FileOutService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class authentication {
  public accountNumber: any;
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'authentication';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new authentication(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_authentication_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: authentication');
    //appendnew_flow_authentication_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: authentication');

    this.app['put'](
      `${this.serviceBasePath}/update`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_IjtqtSWN5xiBQ0Ic(bh, parentSpanInst);
          //appendnew_next_sd_rubhWusWYNNLwPmJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rubhWusWYNNLwPmJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/log-in`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_rvKwoKEgB1QzIF4w(bh, parentSpanInst);
          //appendnew_next_sd_cteWP9hLQoRNHArY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cteWP9hLQoRNHArY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-customers`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_7jc6ulH1Yuoj3AGd(bh, parentSpanInst);
          //appendnew_next_sd_Lp0fZfIMyFSc2g2y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Lp0fZfIMyFSc2g2y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/registration`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'C:\\Users\\User\\Desktop\\capitec-app\\src\\assets\\uploads'.replace(
          /\\|\//g,
          sep
        ),
        options: [{ name: 'ID', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.filter(bh, parentSpanInst);
          //appendnew_next_sd_wNSwJNXL5YZXw945
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wNSwJNXL5YZXw945');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-doc`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_661GptA084Ggo9sh(bh, parentSpanInst);
          //appendnew_next_sd_Oo2Mvr3ELxt6cN6T
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Oo2Mvr3ELxt6cN6T');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-admin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_24fMBEqRFLUEba5C(bh, parentSpanInst);
          //appendnew_next_sd_rDyQ3CiQZzPAgQUw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rDyQ3CiQZzPAgQUw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-ID`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'ID', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_re0o7HyOwTWh41s1(bh, parentSpanInst);
          //appendnew_next_sd_ZXYb7DtTQtl0IzCS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZXYb7DtTQtl0IzCS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin-log-in`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_rQns6bmCqDtYJRF7(bh, parentSpanInst);
          //appendnew_next_sd_GnRmWMJ9CKwXfT4s
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GnRmWMJ9CKwXfT4s');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-admin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_J20aydaSlPCQR1LX(bh, parentSpanInst);
          //appendnew_next_sd_7tbBQhVKDFD7qzBH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7tbBQhVKDFD7qzBH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_mhe6dRuGGK3uEJCF(bh, parentSpanInst);
          //appendnew_next_sd_nAhUEQR5GV1o7HYM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nAhUEQR5GV1o7HYM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-proof`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'proof_of_residence', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_2pnSdVCyfl7FNdGx(bh, parentSpanInst);
          //appendnew_next_sd_GTrmxnfmYdF2FMf4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GTrmxnfmYdF2FMf4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-picture`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'pictures', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_uokvLXcME4b47mIE(bh, parentSpanInst);
          //appendnew_next_sd_5SewGgYttHnr3W8A
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5SewGgYttHnr3W8A');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-admin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_NSfFFW6lQC5q0rMT(bh, parentSpanInst);
          //appendnew_next_sd_F2ndpzV8A4Vlc8JJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_F2ndpzV8A4Vlc8JJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin-forgot`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_DJiCD0OLmbktXr7a(bh, parentSpanInst);
          //appendnew_next_sd_Ccr3eyIeRbMohgPE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ccr3eyIeRbMohgPE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_FjHEtovdIeVGEE0G(bh, parentSpanInst);
          //appendnew_next_sd_J4rsabFAz2mXqcbq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_J4rsabFAz2mXqcbq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_authentication_HttpIn
  }
  //   service flows_authentication

  async toCheckIfTheUserExists(
    parentSpanInst,
    searchObj: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'toCheckIfTheUserExists',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mongoDb(bh, parentSpanInst);
      //appendnew_next_toCheckIfTheUserExists
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KjP1tTXY8ubtVYLV',
        spanInst,
        'toCheckIfTheUserExists'
      );
    }
  }
  //appendnew_flow_authentication_start

  async mongoDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mongoDb', parentSpanInst);
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_Kkkscf5YGu1U4UWP',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_mongoDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o7sY5owLdQDjMSQ7',
        spanInst,
        'mongoDb'
      );
    }
  }

  async sd_IjtqtSWN5xiBQ0Ic(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IjtqtSWN5xiBQ0Ic',
      parentSpanInst
    );
    try {
      bh.collection = 'users';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;
      // delete bh.input.body['_id'];

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2i8wqB0nc7q2mVyx(bh, parentSpanInst);
      //appendnew_next_sd_IjtqtSWN5xiBQ0Ic
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IjtqtSWN5xiBQ0Ic',
        spanInst,
        'sd_IjtqtSWN5xiBQ0Ic'
      );
    }
  }

  async sd_2i8wqB0nc7q2mVyx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2i8wqB0nc7q2mVyx',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xjZB4huFTdG8tYAq(bh, parentSpanInst);
      //appendnew_next_sd_2i8wqB0nc7q2mVyx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2i8wqB0nc7q2mVyx',
        spanInst,
        'sd_2i8wqB0nc7q2mVyx'
      );
    }
  }

  async sd_xjZB4huFTdG8tYAq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xjZB4huFTdG8tYAq');
    }
  }

  async sd_rvKwoKEgB1QzIF4w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rvKwoKEgB1QzIF4w',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bskLfDBe51HGmAZi(bh, parentSpanInst);
      //appendnew_next_sd_rvKwoKEgB1QzIF4w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rvKwoKEgB1QzIF4w',
        spanInst,
        'sd_rvKwoKEgB1QzIF4w'
      );
    }
  }

  async sd_bskLfDBe51HGmAZi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bskLfDBe51HGmAZi',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tu2uLm6lTUIUENj0(bh, parentSpanInst);
      //appendnew_next_sd_bskLfDBe51HGmAZi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bskLfDBe51HGmAZi',
        spanInst,
        'sd_bskLfDBe51HGmAZi'
      );
    }
  }

  async sd_tu2uLm6lTUIUENj0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tu2uLm6lTUIUENj0',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yxjKVxJREDrZqi8r(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hsFD6grIGlVB3zwi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tu2uLm6lTUIUENj0',
        spanInst,
        'sd_tu2uLm6lTUIUENj0'
      );
    }
  }

  async sd_yxjKVxJREDrZqi8r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yxjKVxJREDrZqi8r',
      parentSpanInst
    );
    try {
      bh.result = bh.result[0];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_87NnnBLSMgmN7bvY(bh, parentSpanInst);
      //appendnew_next_sd_yxjKVxJREDrZqi8r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yxjKVxJREDrZqi8r',
        spanInst,
        'sd_yxjKVxJREDrZqi8r'
      );
    }
  }

  async sd_87NnnBLSMgmN7bvY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_87NnnBLSMgmN7bvY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.pin,
          bh.input.body.pin,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YJDRmwUzjVmTLESq(bh, parentSpanInst);
      } else {
        bh = await this.sd_SHQWq6zK3Ri2AaZR(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_87NnnBLSMgmN7bvY',
        spanInst,
        'sd_87NnnBLSMgmN7bvY'
      );
    }
  }

  async sd_YJDRmwUzjVmTLESq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YJDRmwUzjVmTLESq',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst);
      //appendnew_next_sd_YJDRmwUzjVmTLESq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YJDRmwUzjVmTLESq',
        spanInst,
        'sd_YJDRmwUzjVmTLESq'
      );
    }
  }

  async sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pcyOxzVMzk1DjQYV');
    }
  }

  async sd_SHQWq6zK3Ri2AaZR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SHQWq6zK3Ri2AaZR',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: "PASSWORD DON'T MATCH!!",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst);
      //appendnew_next_sd_SHQWq6zK3Ri2AaZR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SHQWq6zK3Ri2AaZR',
        spanInst,
        'sd_SHQWq6zK3Ri2AaZR'
      );
    }
  }

  async sd_hsFD6grIGlVB3zwi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hsFD6grIGlVB3zwi',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'INVALID DETAILS!!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst);
      //appendnew_next_sd_hsFD6grIGlVB3zwi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hsFD6grIGlVB3zwi',
        spanInst,
        'sd_hsFD6grIGlVB3zwi'
      );
    }
  }

  async sd_7jc6ulH1Yuoj3AGd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7jc6ulH1Yuoj3AGd',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zhBOiNCaIPMQ0BzM(bh, parentSpanInst);
      //appendnew_next_sd_7jc6ulH1Yuoj3AGd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7jc6ulH1Yuoj3AGd',
        spanInst,
        'sd_7jc6ulH1Yuoj3AGd'
      );
    }
  }

  async sd_zhBOiNCaIPMQ0BzM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zhBOiNCaIPMQ0BzM',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8ZUcStvKVtctPoan(bh, parentSpanInst);
      //appendnew_next_sd_zhBOiNCaIPMQ0BzM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zhBOiNCaIPMQ0BzM',
        spanInst,
        'sd_zhBOiNCaIPMQ0BzM'
      );
    }
  }

  async sd_8ZUcStvKVtctPoan(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8ZUcStvKVtctPoan',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.success(bh, parentSpanInst);
      } else {
        bh = await this.notFound(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8ZUcStvKVtctPoan',
        spanInst,
        'sd_8ZUcStvKVtctPoan'
      );
    }
  }

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1ZmxULLNfcKygpjb(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iT5AbZG6vda1stQh',
        spanInst,
        'success'
      );
    }
  }

  async sd_1ZmxULLNfcKygpjb(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ZmxULLNfcKygpjb');
    }
  }

  async notFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFound', parentSpanInst);
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_1ZmxULLNfcKygpjb(bh, parentSpanInst);
      //appendnew_next_notFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NoSnWYTN89Up8EMh',
        spanInst,
        'notFound'
      );
    }
  }

  async filter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('filter', parentSpanInst);
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.input.body['_id'] = new Date().getTime();
      bh.input.body['status'] = 'pending';
      bh.input.body['available balance'] = 50;
      bh.input.body['cash_withdrawal_limit'] = 500;
      bh.input.body['card_purchases_limit'] = 500;
      bh.input.body['online_scan-to-pay_phone'] = 500;
      bh.input.body['cash_withdrawal_limit_temp'] = 500;
      bh.input.body['card_purchases_limit_temp'] = 500;
      bh.input.body['online_scan_to_pay_phone_temp'] = 500;
      bh.input.body['date'] = 'N/A';
      bh.input.body['registered'] = 'true';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uUIUBZC8TrCWMreT(bh, parentSpanInst);
      //appendnew_next_filter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oQC3wqUeMZ33B9S1',
        spanInst,
        'filter'
      );
    }
  }

  async sd_uUIUBZC8TrCWMreT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uUIUBZC8TrCWMreT',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1r7LuLOJrJSKtErt(bh, parentSpanInst);
      //appendnew_next_sd_uUIUBZC8TrCWMreT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uUIUBZC8TrCWMreT',
        spanInst,
        'sd_uUIUBZC8TrCWMreT'
      );
    }
  }

  async sd_1r7LuLOJrJSKtErt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1r7LuLOJrJSKtErt',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.ifError(bh, parentSpanInst);
      } else {
        bh = await this.sd_1PgsBoBZHTxIgHrz(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1r7LuLOJrJSKtErt',
        spanInst,
        'sd_1r7LuLOJrJSKtErt'
      );
    }
  }

  async ifError(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifError', parentSpanInst);
    try {
      bh.status = 404;
      bh.result = {
        message: 'User already exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OCnBbcvqOLZSMTj9(bh, parentSpanInst);
      //appendnew_next_ifError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MGR6Ii6HahxzHhpw',
        spanInst,
        'ifError'
      );
    }
  }

  async sd_OCnBbcvqOLZSMTj9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OCnBbcvqOLZSMTj9');
    }
  }

  async sd_1PgsBoBZHTxIgHrz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1PgsBoBZHTxIgHrz',
      parentSpanInst
    );
    try {
      console.log('Last script: ', bh.hashed);
      bh.status = 200;
      bh.collection = bh.input.body.collection;

      delete bh.input.body.collection;
      bh.body = bh.input.body;
      console.log(bh.body);
      console.log(bh.input.body);

      console.log('body ==>', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FyqgIf0A0W3zujIX(bh, parentSpanInst);
      //appendnew_next_sd_1PgsBoBZHTxIgHrz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1PgsBoBZHTxIgHrz',
        spanInst,
        'sd_1PgsBoBZHTxIgHrz'
      );
    }
  }

  async sd_FyqgIf0A0W3zujIX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FyqgIf0A0W3zujIX',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'REGISTRATION SUCCESSFUL',
        from: 'Capitec',
        body: `Your application to bank with Capitec has been sent.

<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/></center>`,
      };

      bh.input.body['accountNumber'] = bh.accountNo;

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DqrU3UoLykR5cDTa(bh, parentSpanInst);
      //appendnew_next_sd_FyqgIf0A0W3zujIX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FyqgIf0A0W3zujIX',
        spanInst,
        'sd_FyqgIf0A0W3zujIX'
      );
    }
  }

  async sd_DqrU3UoLykR5cDTa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DqrU3UoLykR5cDTa',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3bnQv8eSzR6JZwQw(bh, parentSpanInst);
      //appendnew_next_sd_DqrU3UoLykR5cDTa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DqrU3UoLykR5cDTa',
        spanInst,
        'sd_DqrU3UoLykR5cDTa'
      );
    }
  }

  async sd_3bnQv8eSzR6JZwQw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3bnQv8eSzR6JZwQw',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.input.body.email,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OCnBbcvqOLZSMTj9(bh, parentSpanInst);
      //appendnew_next_sd_3bnQv8eSzR6JZwQw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3bnQv8eSzR6JZwQw',
        spanInst,
        'sd_3bnQv8eSzR6JZwQw'
      );
    }
  }

  async sd_661GptA084Ggo9sh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_661GptA084Ggo9sh',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'doc',
      };

      // bh.file = bh.input.files.name[0]
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_36lGut0kmUrlZgzm(bh, parentSpanInst);
      //appendnew_next_sd_661GptA084Ggo9sh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_661GptA084Ggo9sh',
        spanInst,
        'sd_661GptA084Ggo9sh'
      );
    }
  }

  async sd_36lGut0kmUrlZgzm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_36lGut0kmUrlZgzm',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lIQWNmZ7uoQrmhEK(bh, parentSpanInst);
      //appendnew_next_sd_36lGut0kmUrlZgzm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_36lGut0kmUrlZgzm',
        spanInst,
        'sd_36lGut0kmUrlZgzm'
      );
    }
  }

  async sd_lIQWNmZ7uoQrmhEK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lIQWNmZ7uoQrmhEK',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.successful(bh, parentSpanInst);
      } else {
        bh = await this.notFoundAny(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lIQWNmZ7uoQrmhEK',
        spanInst,
        'sd_lIQWNmZ7uoQrmhEK'
      );
    }
  }

  async successful(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'successful',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6Q2BvqFxg3RhsZ8B(bh, parentSpanInst);
      //appendnew_next_successful
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LGBeMHDbzn4SoWZG',
        spanInst,
        'successful'
      );
    }
  }

  async sd_6Q2BvqFxg3RhsZ8B(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6Q2BvqFxg3RhsZ8B',
      parentSpanInst
    );
    try {
      let fileOutService = FileOutService.getInstance();
      await fileOutService.fileOut({
        filepath: bh.file.path,
        payload: bh.result,
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hvL7nY3Typ2jB5GI(bh, parentSpanInst);
      //appendnew_next_sd_6Q2BvqFxg3RhsZ8B
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Q2BvqFxg3RhsZ8B',
        spanInst,
        'sd_6Q2BvqFxg3RhsZ8B'
      );
    }
  }

  async sd_hvL7nY3Typ2jB5GI(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hvL7nY3Typ2jB5GI');
    }
  }

  async notFoundAny(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'notFoundAny',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_hvL7nY3Typ2jB5GI(bh, parentSpanInst);
      //appendnew_next_notFoundAny
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ayEeQr33bxxb6ymN',
        spanInst,
        'notFoundAny'
      );
    }
  }

  async sd_24fMBEqRFLUEba5C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_24fMBEqRFLUEba5C',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'admin',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dPJgeFFA4Xe6A8tt(bh, parentSpanInst);
      //appendnew_next_sd_24fMBEqRFLUEba5C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_24fMBEqRFLUEba5C',
        spanInst,
        'sd_24fMBEqRFLUEba5C'
      );
    }
  }

  async sd_dPJgeFFA4Xe6A8tt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dPJgeFFA4Xe6A8tt',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oj7nTpUWTzA25MWu(bh, parentSpanInst);
      //appendnew_next_sd_dPJgeFFA4Xe6A8tt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dPJgeFFA4Xe6A8tt',
        spanInst,
        'sd_dPJgeFFA4Xe6A8tt'
      );
    }
  }

  async sd_oj7nTpUWTzA25MWu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oj7nTpUWTzA25MWu',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6vmcfGndA0blacqC(bh, parentSpanInst);
      } else {
        bh = await this.sd_Ga8IrwSSvEOy4YZv(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oj7nTpUWTzA25MWu',
        spanInst,
        'sd_oj7nTpUWTzA25MWu'
      );
    }
  }

  async sd_6vmcfGndA0blacqC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6vmcfGndA0blacqC',
      parentSpanInst
    );
    try {
      bh.status = 401;
      console.log('admin exists');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst);
      //appendnew_next_sd_6vmcfGndA0blacqC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6vmcfGndA0blacqC',
        spanInst,
        'sd_6vmcfGndA0blacqC'
      );
    }
  }

  async sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WSbR9ZOsy4Zb7OTg');
    }
  }

  async sd_Ga8IrwSSvEOy4YZv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ga8IrwSSvEOy4YZv',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      bh.status = 201;

      bh.body = {
        email: 'kimberlymnguni@gmail.com',
        password: '1234',
        collection: 'admin',
      };

      delete bh.body.collection;
      bh.body['_id'] = new Date().getTime();

      console.log(bh.body);

      bh.collection = bh.input.body.collection;

      delete bh.input.body.collection;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tGwwFfC8rIMMSpXb(bh, parentSpanInst);
      //appendnew_next_sd_Ga8IrwSSvEOy4YZv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ga8IrwSSvEOy4YZv',
        spanInst,
        'sd_Ga8IrwSSvEOy4YZv'
      );
    }
  }

  async sd_tGwwFfC8rIMMSpXb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tGwwFfC8rIMMSpXb',
      parentSpanInst
    );
    try {
      bh.body = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst);
      //appendnew_next_sd_tGwwFfC8rIMMSpXb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tGwwFfC8rIMMSpXb',
        spanInst,
        'sd_tGwwFfC8rIMMSpXb'
      );
    }
  }

  async sd_re0o7HyOwTWh41s1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_re0o7HyOwTWh41s1',
      parentSpanInst
    );
    try {
      console.log(bh.file);
      bh.file = bh.input.files.ID[0];

      bh.file['email'] = bh.emails;
      bh.doc = {
        collection: 'ID',
      };

      console.log('LOOK HERE ==>', bh.emails);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_14SgH4ecYfSbicRp(bh, parentSpanInst);
      //appendnew_next_sd_re0o7HyOwTWh41s1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_re0o7HyOwTWh41s1',
        spanInst,
        'sd_re0o7HyOwTWh41s1'
      );
    }
  }

  async sd_14SgH4ecYfSbicRp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_14SgH4ecYfSbicRp',
      parentSpanInst
    );
    try {
      let fileInServiceInstance = FileInService.getInstance();
      bh.result = await fileInServiceInstance.fileIn({
        filepath: bh.file.path,
        format: 'buffer',
        encoding: 'utf8',
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2vm1so87YiwjrXIi(bh, parentSpanInst);
      //appendnew_next_sd_14SgH4ecYfSbicRp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_14SgH4ecYfSbicRp',
        spanInst,
        'sd_14SgH4ecYfSbicRp'
      );
    }
  }

  async sd_2vm1so87YiwjrXIi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2vm1so87YiwjrXIi',
      parentSpanInst
    );
    try {
      bh.dataString = bh.result.toString();
      bh.result = bh.dataString;

      console.log('result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BkHAnn4KnTDpFXyo(bh, parentSpanInst);
      //appendnew_next_sd_2vm1so87YiwjrXIi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2vm1so87YiwjrXIi',
        spanInst,
        'sd_2vm1so87YiwjrXIi'
      );
    }
  }

  async sd_BkHAnn4KnTDpFXyo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BkHAnn4KnTDpFXyo',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.doc.collection,
        bh.file,
        bh.buffer,
        bh.buffer
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3rXbYssh6iKCE1nX(bh, parentSpanInst);
      //appendnew_next_sd_BkHAnn4KnTDpFXyo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BkHAnn4KnTDpFXyo',
        spanInst,
        'sd_BkHAnn4KnTDpFXyo'
      );
    }
  }

  async sd_3rXbYssh6iKCE1nX(bh, parentSpanInst) {
    try {
      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.result);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3rXbYssh6iKCE1nX');
    }
  }

  async sd_rQns6bmCqDtYJRF7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rQns6bmCqDtYJRF7',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'admin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QR4qOfFknjPdlE0G(bh, parentSpanInst);
      //appendnew_next_sd_rQns6bmCqDtYJRF7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rQns6bmCqDtYJRF7',
        spanInst,
        'sd_rQns6bmCqDtYJRF7'
      );
    }
  }

  async sd_QR4qOfFknjPdlE0G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QR4qOfFknjPdlE0G',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SFDFfsQ9TxHjgsbc(bh, parentSpanInst);
      //appendnew_next_sd_QR4qOfFknjPdlE0G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QR4qOfFknjPdlE0G',
        spanInst,
        'sd_QR4qOfFknjPdlE0G'
      );
    }
  }

  async sd_SFDFfsQ9TxHjgsbc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SFDFfsQ9TxHjgsbc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wjuBiwG2Vg0wiQ0x(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vT1LNiuDsUxgCaQA(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SFDFfsQ9TxHjgsbc',
        spanInst,
        'sd_SFDFfsQ9TxHjgsbc'
      );
    }
  }

  async sd_wjuBiwG2Vg0wiQ0x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wjuBiwG2Vg0wiQ0x',
      parentSpanInst
    );
    try {
      bh.result = bh.result[0];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CPi0qPxSbjJRKlZ2(bh, parentSpanInst);
      //appendnew_next_sd_wjuBiwG2Vg0wiQ0x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wjuBiwG2Vg0wiQ0x',
        spanInst,
        'sd_wjuBiwG2Vg0wiQ0x'
      );
    }
  }

  async sd_CPi0qPxSbjJRKlZ2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CPi0qPxSbjJRKlZ2',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.pin,
          bh.input.body.pin,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_nWpXEq4rgKND731X(bh, parentSpanInst);
      } else {
        bh = await this.sd_3PVUvGnkNT994W8u(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CPi0qPxSbjJRKlZ2',
        spanInst,
        'sd_CPi0qPxSbjJRKlZ2'
      );
    }
  }

  async sd_nWpXEq4rgKND731X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nWpXEq4rgKND731X',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst);
      //appendnew_next_sd_nWpXEq4rgKND731X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nWpXEq4rgKND731X',
        spanInst,
        'sd_nWpXEq4rgKND731X'
      );
    }
  }

  async sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jhfvpJLQq0j8fXSO');
    }
  }

  async sd_3PVUvGnkNT994W8u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3PVUvGnkNT994W8u',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: "PASSWORD DON'T MATCH!!",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst);
      //appendnew_next_sd_3PVUvGnkNT994W8u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3PVUvGnkNT994W8u',
        spanInst,
        'sd_3PVUvGnkNT994W8u'
      );
    }
  }

  async sd_vT1LNiuDsUxgCaQA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vT1LNiuDsUxgCaQA',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'INVALID DETAILS!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst);
      //appendnew_next_sd_vT1LNiuDsUxgCaQA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vT1LNiuDsUxgCaQA',
        spanInst,
        'sd_vT1LNiuDsUxgCaQA'
      );
    }
  }

  async sd_J20aydaSlPCQR1LX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J20aydaSlPCQR1LX',
      parentSpanInst
    );
    try {
      this.accountNumber = bh.accountNumber;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k1W1kSOTd6xxcwVp(bh, parentSpanInst);
      //appendnew_next_sd_J20aydaSlPCQR1LX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J20aydaSlPCQR1LX',
        spanInst,
        'sd_J20aydaSlPCQR1LX'
      );
    }
  }

  async sd_k1W1kSOTd6xxcwVp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k1W1kSOTd6xxcwVp',
      parentSpanInst
    );
    try {
      bh.collection = 'users';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };

      bh.accountNo = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4M8rRkWGCSTdWq2m(bh, parentSpanInst);
      //appendnew_next_sd_k1W1kSOTd6xxcwVp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k1W1kSOTd6xxcwVp',
        spanInst,
        'sd_k1W1kSOTd6xxcwVp'
      );
    }
  }

  async sd_4M8rRkWGCSTdWq2m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4M8rRkWGCSTdWq2m',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_33uhtyPmtIE2sl8p(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'rejected',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YUZy02IqT07gy1tn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4M8rRkWGCSTdWq2m',
        spanInst,
        'sd_4M8rRkWGCSTdWq2m'
      );
    }
  }

  async sd_33uhtyPmtIE2sl8p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_33uhtyPmtIE2sl8p',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'APPLICATION SUCCESSFUL',
        from: 'Capitec',
        body: `Your application to bank with Capitec has been approved.
Your account number is ${bh.accountNo}

<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/></center>`,
      };

      bh.input.body['accountNumber'] = bh.accountNo;

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iEGqdVrO2IrPKZlR(bh, parentSpanInst);
      //appendnew_next_sd_33uhtyPmtIE2sl8p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_33uhtyPmtIE2sl8p',
        spanInst,
        'sd_33uhtyPmtIE2sl8p'
      );
    }
  }

  async sd_iEGqdVrO2IrPKZlR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iEGqdVrO2IrPKZlR',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q6O5gIdDjkxbhMdz(bh, parentSpanInst);
      //appendnew_next_sd_iEGqdVrO2IrPKZlR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iEGqdVrO2IrPKZlR',
        spanInst,
        'sd_iEGqdVrO2IrPKZlR'
      );
    }
  }

  async sd_Q6O5gIdDjkxbhMdz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q6O5gIdDjkxbhMdz',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.input.body.email,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TcKHIgUtKSz6qmni(bh, parentSpanInst);
      //appendnew_next_sd_Q6O5gIdDjkxbhMdz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q6O5gIdDjkxbhMdz',
        spanInst,
        'sd_Q6O5gIdDjkxbhMdz'
      );
    }
  }

  async sd_TcKHIgUtKSz6qmni(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TcKHIgUtKSz6qmni');
    }
  }

  async sd_YUZy02IqT07gy1tn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YUZy02IqT07gy1tn',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: '<b> REGISTRATION UNSUCCESSFUL </b>',
        from: 'Capitec',
        body: `Your application to bank with Capitec was not approved.
   
   <center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/>  </center>`,
      };

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zG9YQRzqT1mvDtoB(bh, parentSpanInst);
      //appendnew_next_sd_YUZy02IqT07gy1tn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YUZy02IqT07gy1tn',
        spanInst,
        'sd_YUZy02IqT07gy1tn'
      );
    }
  }

  async sd_zG9YQRzqT1mvDtoB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zG9YQRzqT1mvDtoB',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SImLNw21YIVEUAms(bh, parentSpanInst);
      //appendnew_next_sd_zG9YQRzqT1mvDtoB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zG9YQRzqT1mvDtoB',
        spanInst,
        'sd_zG9YQRzqT1mvDtoB'
      );
    }
  }

  async sd_SImLNw21YIVEUAms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SImLNw21YIVEUAms',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.input.body.email,
          subject: bh.payload.subject,
          body: undefined,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.body,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TcKHIgUtKSz6qmni(bh, parentSpanInst);
      //appendnew_next_sd_SImLNw21YIVEUAms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SImLNw21YIVEUAms',
        spanInst,
        'sd_SImLNw21YIVEUAms'
      );
    }
  }

  async sd_mhe6dRuGGK3uEJCF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mhe6dRuGGK3uEJCF',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.filter = { email: bh.input.body['email'] };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OLUA6D209KtJiSlc(bh, parentSpanInst);
      //appendnew_next_sd_mhe6dRuGGK3uEJCF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mhe6dRuGGK3uEJCF',
        spanInst,
        'sd_mhe6dRuGGK3uEJCF'
      );
    }
  }

  async sd_OLUA6D209KtJiSlc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OLUA6D209KtJiSlc',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sa4x6ewisc0U4fqq(bh, parentSpanInst);
      //appendnew_next_sd_OLUA6D209KtJiSlc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OLUA6D209KtJiSlc',
        spanInst,
        'sd_OLUA6D209KtJiSlc'
      );
    }
  }

  async sd_sa4x6ewisc0U4fqq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sa4x6ewisc0U4fqq',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_Kkkscf5YGu1U4UWP',
        bh.search.collection,
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YBIuyekp2L72ixYI(bh, parentSpanInst);
      //appendnew_next_sd_sa4x6ewisc0U4fqq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sa4x6ewisc0U4fqq',
        spanInst,
        'sd_sa4x6ewisc0U4fqq'
      );
    }
  }

  async sd_YBIuyekp2L72ixYI(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YBIuyekp2L72ixYI');
    }
  }

  async sd_2pnSdVCyfl7FNdGx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2pnSdVCyfl7FNdGx',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.proof_of_residence[0];

      bh.file['email'] = bh.emails;
      bh.doc = {
        collection: 'Proof_of_residence',
      };

      console.log('LOOK HERE ==>', bh.emails);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TPSoLDHqp4ctSrqo(bh, parentSpanInst);
      //appendnew_next_sd_2pnSdVCyfl7FNdGx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2pnSdVCyfl7FNdGx',
        spanInst,
        'sd_2pnSdVCyfl7FNdGx'
      );
    }
  }

  async sd_TPSoLDHqp4ctSrqo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TPSoLDHqp4ctSrqo',
      parentSpanInst
    );
    try {
      let fileInServiceInstance = FileInService.getInstance();
      bh.result = await fileInServiceInstance.fileIn({
        filepath: bh.file.path,
        format: 'buffer',
        encoding: 'utf8',
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_C8IZoIinakp9r0kb(bh, parentSpanInst);
      //appendnew_next_sd_TPSoLDHqp4ctSrqo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TPSoLDHqp4ctSrqo',
        spanInst,
        'sd_TPSoLDHqp4ctSrqo'
      );
    }
  }

  async sd_C8IZoIinakp9r0kb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_C8IZoIinakp9r0kb',
      parentSpanInst
    );
    try {
      bh.dataString = bh.result.toString();
      bh.result = bh.dataString;

      console.log('result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CDxctjftAsrDISTV(bh, parentSpanInst);
      //appendnew_next_sd_C8IZoIinakp9r0kb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C8IZoIinakp9r0kb',
        spanInst,
        'sd_C8IZoIinakp9r0kb'
      );
    }
  }

  async sd_CDxctjftAsrDISTV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CDxctjftAsrDISTV',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.doc.collection,
        bh.file,
        bh.buffer,
        bh.buffer
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nOb4lYosXVYPRmpt(bh, parentSpanInst);
      //appendnew_next_sd_CDxctjftAsrDISTV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CDxctjftAsrDISTV',
        spanInst,
        'sd_CDxctjftAsrDISTV'
      );
    }
  }

  async sd_nOb4lYosXVYPRmpt(bh, parentSpanInst) {
    try {
      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.file);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nOb4lYosXVYPRmpt');
    }
  }

  async sd_uokvLXcME4b47mIE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uokvLXcME4b47mIE',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.pictures[0];

      bh.file['email'] = bh.emails;
      bh.doc = {
        collection: 'pictures',
      };

      console.log('LOOK HERE ==>', bh.emails);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Gq43Mp6tQu3JLi70(bh, parentSpanInst);
      //appendnew_next_sd_uokvLXcME4b47mIE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uokvLXcME4b47mIE',
        spanInst,
        'sd_uokvLXcME4b47mIE'
      );
    }
  }

  async sd_Gq43Mp6tQu3JLi70(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gq43Mp6tQu3JLi70',
      parentSpanInst
    );
    try {
      let fileInServiceInstance = FileInService.getInstance();
      bh.result = await fileInServiceInstance.fileIn({
        filepath: bh.file.path,
        format: 'buffer',
        encoding: 'utf8',
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yK0YzpyAgug60cmD(bh, parentSpanInst);
      //appendnew_next_sd_Gq43Mp6tQu3JLi70
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gq43Mp6tQu3JLi70',
        spanInst,
        'sd_Gq43Mp6tQu3JLi70'
      );
    }
  }

  async sd_yK0YzpyAgug60cmD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yK0YzpyAgug60cmD',
      parentSpanInst
    );
    try {
      bh.dataString = bh.result.toString();
      bh.result = bh.dataString;

      console.log('result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vfqnU1o3r5i7icy0(bh, parentSpanInst);
      //appendnew_next_sd_yK0YzpyAgug60cmD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yK0YzpyAgug60cmD',
        spanInst,
        'sd_yK0YzpyAgug60cmD'
      );
    }
  }

  async sd_vfqnU1o3r5i7icy0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vfqnU1o3r5i7icy0',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.doc.collection,
        bh.file,
        bh.buffer,
        bh.buffer
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HUYr3nZYciEi4OsC(bh, parentSpanInst);
      //appendnew_next_sd_vfqnU1o3r5i7icy0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vfqnU1o3r5i7icy0',
        spanInst,
        'sd_vfqnU1o3r5i7icy0'
      );
    }
  }

  async sd_HUYr3nZYciEi4OsC(bh, parentSpanInst) {
    try {
      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.file);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HUYr3nZYciEi4OsC');
    }
  }

  async sd_NSfFFW6lQC5q0rMT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NSfFFW6lQC5q0rMT',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'admin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iHnF72paKTdIryVk(bh, parentSpanInst);
      //appendnew_next_sd_NSfFFW6lQC5q0rMT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NSfFFW6lQC5q0rMT',
        spanInst,
        'sd_NSfFFW6lQC5q0rMT'
      );
    }
  }

  async sd_iHnF72paKTdIryVk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iHnF72paKTdIryVk',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L8BtUmbXbiWHCjAA(bh, parentSpanInst);
      //appendnew_next_sd_iHnF72paKTdIryVk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iHnF72paKTdIryVk',
        spanInst,
        'sd_iHnF72paKTdIryVk'
      );
    }
  }

  async sd_L8BtUmbXbiWHCjAA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L8BtUmbXbiWHCjAA',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2BCSbXP44mH4qjf4(bh, parentSpanInst);
      } else {
        bh = await this.sd_blzK0KKVRgHMg014(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L8BtUmbXbiWHCjAA',
        spanInst,
        'sd_L8BtUmbXbiWHCjAA'
      );
    }
  }

  async sd_2BCSbXP44mH4qjf4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2BCSbXP44mH4qjf4',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MrHH4LDqzVd2kl1V(bh, parentSpanInst);
      //appendnew_next_sd_2BCSbXP44mH4qjf4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2BCSbXP44mH4qjf4',
        spanInst,
        'sd_2BCSbXP44mH4qjf4'
      );
    }
  }

  async sd_MrHH4LDqzVd2kl1V(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MrHH4LDqzVd2kl1V');
    }
  }

  async sd_blzK0KKVRgHMg014(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_blzK0KKVRgHMg014',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_MrHH4LDqzVd2kl1V(bh, parentSpanInst);
      //appendnew_next_sd_blzK0KKVRgHMg014
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_blzK0KKVRgHMg014',
        spanInst,
        'sd_blzK0KKVRgHMg014'
      );
    }
  }

  async sd_DJiCD0OLmbktXr7a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DJiCD0OLmbktXr7a',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'admin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AMhvanHlwSHtxCuW(bh, parentSpanInst);
      //appendnew_next_sd_DJiCD0OLmbktXr7a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DJiCD0OLmbktXr7a',
        spanInst,
        'sd_DJiCD0OLmbktXr7a'
      );
    }
  }

  async sd_AMhvanHlwSHtxCuW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AMhvanHlwSHtxCuW',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HdJEFqsD96WnjrOJ(bh, parentSpanInst);
      //appendnew_next_sd_AMhvanHlwSHtxCuW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AMhvanHlwSHtxCuW',
        spanInst,
        'sd_AMhvanHlwSHtxCuW'
      );
    }
  }

  async sd_HdJEFqsD96WnjrOJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HdJEFqsD96WnjrOJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KNNBuEkTGeBKqvPG(bh, parentSpanInst);
      } else {
        bh = await this.sd_8AAtiqOuCVbM50J4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HdJEFqsD96WnjrOJ',
        spanInst,
        'sd_HdJEFqsD96WnjrOJ'
      );
    }
  }

  async sd_KNNBuEkTGeBKqvPG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KNNBuEkTGeBKqvPG',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'Verification Code',
        from: 'Capitec',
        body: `Here is your verification code ${bh.input.body.code}`,
      };

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JMW6OAG8URSslbPS(bh, parentSpanInst);
      //appendnew_next_sd_KNNBuEkTGeBKqvPG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KNNBuEkTGeBKqvPG',
        spanInst,
        'sd_KNNBuEkTGeBKqvPG'
      );
    }
  }

  async sd_JMW6OAG8URSslbPS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JMW6OAG8URSslbPS',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XxceEDZ2WugwuKJB(bh, parentSpanInst);
      //appendnew_next_sd_JMW6OAG8URSslbPS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JMW6OAG8URSslbPS',
        spanInst,
        'sd_JMW6OAG8URSslbPS'
      );
    }
  }

  async sd_XxceEDZ2WugwuKJB(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XxceEDZ2WugwuKJB');
    }
  }

  async sd_8AAtiqOuCVbM50J4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8AAtiqOuCVbM50J4',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'User not found!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XxceEDZ2WugwuKJB(bh, parentSpanInst);
      //appendnew_next_sd_8AAtiqOuCVbM50J4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8AAtiqOuCVbM50J4',
        spanInst,
        'sd_8AAtiqOuCVbM50J4'
      );
    }
  }

  async sd_FjHEtovdIeVGEE0G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FjHEtovdIeVGEE0G',
      parentSpanInst
    );
    try {
      bh.collection = 'admin';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;
      // delete bh.input.body['_id'];

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9wuSKUFh6hzu2k73(bh, parentSpanInst);
      //appendnew_next_sd_FjHEtovdIeVGEE0G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FjHEtovdIeVGEE0G',
        spanInst,
        'sd_FjHEtovdIeVGEE0G'
      );
    }
  }

  async sd_9wuSKUFh6hzu2k73(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9wuSKUFh6hzu2k73',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lrT7M5q2CbxSEsoI(bh, parentSpanInst);
      //appendnew_next_sd_9wuSKUFh6hzu2k73
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9wuSKUFh6hzu2k73',
        spanInst,
        'sd_9wuSKUFh6hzu2k73'
      );
    }
  }

  async sd_lrT7M5q2CbxSEsoI(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lrT7M5q2CbxSEsoI');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_authentication_Catch
}
