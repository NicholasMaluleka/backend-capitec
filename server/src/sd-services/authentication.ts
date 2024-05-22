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
          bh = await this.searchUsingAnEmail(bh, parentSpanInst);
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
          bh = await this.sd_Ga8IrwSSvEOy4YZv(bh, parentSpanInst);
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

    this.app['get'](
      `${this.serviceBasePath}/download`,
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
          bh = await this.sd_5rWW1kuJf58kBmQR(bh, parentSpanInst);
          //appendnew_next_sd_Kx8f0HwYEJjck6vE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Kx8f0HwYEJjck6vE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-file`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
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
        message: "WE CAN'T FIND YOU!!!",
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

  async searchUsingAnEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'searchUsingAnEmail',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
        status: 'pending',
      };

      bh.input.body['_id'] = new Date().getTime();
      bh.input.body['status'] = 'pending';
      console.log('B ==>', bh.input.body);
      bh.e = bh.input.body['email'];
      console.log('LOOK HERE ==>', bh.emails);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uUIUBZC8TrCWMreT(bh, parentSpanInst);
      //appendnew_next_searchUsingAnEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YALbo1Afuro3ZUk4',
        spanInst,
        'searchUsingAnEmail'
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
        bh = await this.sd_XPtYFLg5cFDSF9LZ(bh, parentSpanInst);
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

  async sd_XPtYFLg5cFDSF9LZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XPtYFLg5cFDSF9LZ',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.collection = bh.input.body.collection;

      delete bh.input.body.collection;
      bh.body = bh.input.body;

      console.log('body ==>', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DqrU3UoLykR5cDTa(bh, parentSpanInst);
      //appendnew_next_sd_XPtYFLg5cFDSF9LZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XPtYFLg5cFDSF9LZ',
        spanInst,
        'sd_XPtYFLg5cFDSF9LZ'
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
      bh = await this.sd_UdrE8xgD6V1ouecQ(bh, parentSpanInst);
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

  async sd_UdrE8xgD6V1ouecQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UdrE8xgD6V1ouecQ',
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
          subject: 'Account registration',
          body: undefined,
          cc: undefined,
          bcc: undefined,
          from: 'Capitec',
          html: 'Your application to open an account with Capitec has been sent . ',
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
      //appendnew_next_sd_UdrE8xgD6V1ouecQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UdrE8xgD6V1ouecQ',
        spanInst,
        'sd_UdrE8xgD6V1ouecQ'
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
      await this.sd_hvL7nY3Typ2jB5GI(bh, parentSpanInst);
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

  async sd_Ga8IrwSSvEOy4YZv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ga8IrwSSvEOy4YZv',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;

      bh.body = {
        email: 'kimberleymnguni@gmail.com',
        password: '1234',
        collection: 'admin',
      };

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

  async sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WSbR9ZOsy4Zb7OTg');
    }
  }

  async sd_5rWW1kuJf58kBmQR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5rWW1kuJf58kBmQR',
      parentSpanInst
    );
    try {
      let fileOutService = FileOutService.getInstance();
      await fileOutService.fileOut({
        filepath:
          'C:\\\\Users\\\\User\\\\Desktop\\\\capitec-app\\\\src\\\\assets\\\\uploads\\\\resume_Nicholas_Maluleka.pdf',
        payload: bh.result,
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Yw24UfVbF8QRUKN2(bh, parentSpanInst);
      //appendnew_next_sd_5rWW1kuJf58kBmQR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5rWW1kuJf58kBmQR',
        spanInst,
        'sd_5rWW1kuJf58kBmQR'
      );
    }
  }

  async sd_Yw24UfVbF8QRUKN2(bh, parentSpanInst) {
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
      return await this.errorHandler(bh, e, 'sd_Yw24UfVbF8QRUKN2');
    }
  }

  async sd_re0o7HyOwTWh41s1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_re0o7HyOwTWh41s1',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.name[0];

      bh.file['email'] = bh.emails;
      bh.doc = {
        collection: 'doc',
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
        message: "WE CAN'T FIND YOU!!!",
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
