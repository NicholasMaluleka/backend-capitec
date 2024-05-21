// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu from './authentication'; //_splitter_
//append_imports_end
export class money {
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
    this.serviceName = 'money';
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
      instance = new money(
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
    //appendnew_flow_money_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: money');
    //appendnew_flow_money_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: money');

    this.app['post'](
      `${this.serviceBasePath}/buy-airtime`,
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
          bh = await this.sd_6mdfSM2ofre2xeVL(bh, parentSpanInst);
          //appendnew_next_sd_60BNLbiIpUVayAY8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_60BNLbiIpUVayAY8');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/buy-electricity`,
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
          bh = await this.sd_US6fzZ3MTlO35CxO(bh, parentSpanInst);
          //appendnew_next_sd_km6pcIJHHjl4EtKi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_km6pcIJHHjl4EtKi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/send-money`,
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
          bh = await this.sd_PcL1SOCo3VWgYpJM(bh, parentSpanInst);
          //appendnew_next_sd_xIBhpWD43UbWeZRC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xIBhpWD43UbWeZRC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-loan`,
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
          bh = await this.sd_a3GLXtWfgmhnkp6C(bh, parentSpanInst);
          //appendnew_next_sd_1CzkgzcP8319IxLr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1CzkgzcP8319IxLr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-loans`,
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
          bh = await this.sd_YipzuufjTxx4VnN2(bh, parentSpanInst);
          //appendnew_next_sd_3OviGai5r5P8bsS9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3OviGai5r5P8bsS9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-electricity`,
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
          bh = await this.sd_CiIL3tc2dQmojqMa(bh, parentSpanInst);
          //appendnew_next_sd_1jZLDEYQFXU9lMyU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1jZLDEYQFXU9lMyU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_money_HttpIn
  }
  //   service flows_money

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
        'sd_5mLoRLPxenKmy7OD',
        spanInst,
        'toCheckIfTheUserExists'
      );
    }
  }
  //appendnew_flow_money_start

  async sd_6mdfSM2ofre2xeVL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6mdfSM2ofre2xeVL',
      parentSpanInst
    );
    try {
      bh.buy = {
        collection: 'airtime',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Sqjhhey5v5mC1c4g(bh, parentSpanInst);
      //appendnew_next_sd_6mdfSM2ofre2xeVL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6mdfSM2ofre2xeVL',
        spanInst,
        'sd_6mdfSM2ofre2xeVL'
      );
    }
  }

  async sd_Sqjhhey5v5mC1c4g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Sqjhhey5v5mC1c4g',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0s92eGXBdE4oUVyu(bh, parentSpanInst);
      //appendnew_next_sd_Sqjhhey5v5mC1c4g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Sqjhhey5v5mC1c4g',
        spanInst,
        'sd_Sqjhhey5v5mC1c4g'
      );
    }
  }

  async sd_0s92eGXBdE4oUVyu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0s92eGXBdE4oUVyu',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.buy.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MXd1zA6Ck1ZWmlN9(bh, parentSpanInst);
      //appendnew_next_sd_0s92eGXBdE4oUVyu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0s92eGXBdE4oUVyu',
        spanInst,
        'sd_0s92eGXBdE4oUVyu'
      );
    }
  }

  async sd_MXd1zA6Ck1ZWmlN9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MXd1zA6Ck1ZWmlN9');
    }
  }

  async sd_US6fzZ3MTlO35CxO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_US6fzZ3MTlO35CxO',
      parentSpanInst
    );
    try {
      bh.buy = {
        collection: 'electricity',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q5g0VYC8xoKeqBrq(bh, parentSpanInst);
      //appendnew_next_sd_US6fzZ3MTlO35CxO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_US6fzZ3MTlO35CxO',
        spanInst,
        'sd_US6fzZ3MTlO35CxO'
      );
    }
  }

  async sd_Q5g0VYC8xoKeqBrq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q5g0VYC8xoKeqBrq',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_P3Y1CXHVTwbULE8Q(bh, parentSpanInst);
      //appendnew_next_sd_Q5g0VYC8xoKeqBrq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q5g0VYC8xoKeqBrq',
        spanInst,
        'sd_Q5g0VYC8xoKeqBrq'
      );
    }
  }

  async sd_P3Y1CXHVTwbULE8Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P3Y1CXHVTwbULE8Q',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.buy.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FSQOAtHPn26LsU6M(bh, parentSpanInst);
      //appendnew_next_sd_P3Y1CXHVTwbULE8Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P3Y1CXHVTwbULE8Q',
        spanInst,
        'sd_P3Y1CXHVTwbULE8Q'
      );
    }
  }

  async sd_FSQOAtHPn26LsU6M(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FSQOAtHPn26LsU6M');
    }
  }

  async sd_PcL1SOCo3VWgYpJM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PcL1SOCo3VWgYpJM',
      parentSpanInst
    );
    try {
      bh.send = {
        collection: 'money-transfer',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Pw4KZCHOFtLfdzC8(bh, parentSpanInst);
      //appendnew_next_sd_PcL1SOCo3VWgYpJM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PcL1SOCo3VWgYpJM',
        spanInst,
        'sd_PcL1SOCo3VWgYpJM'
      );
    }
  }

  async sd_Pw4KZCHOFtLfdzC8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pw4KZCHOFtLfdzC8',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FbGwYvflgdBIgxUj(bh, parentSpanInst);
      //appendnew_next_sd_Pw4KZCHOFtLfdzC8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pw4KZCHOFtLfdzC8',
        spanInst,
        'sd_Pw4KZCHOFtLfdzC8'
      );
    }
  }

  async sd_FbGwYvflgdBIgxUj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FbGwYvflgdBIgxUj',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.send.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HCz1A9OJzavy4llZ(bh, parentSpanInst);
      //appendnew_next_sd_FbGwYvflgdBIgxUj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FbGwYvflgdBIgxUj',
        spanInst,
        'sd_FbGwYvflgdBIgxUj'
      );
    }
  }

  async sd_HCz1A9OJzavy4llZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HCz1A9OJzavy4llZ');
    }
  }

  async sd_a3GLXtWfgmhnkp6C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3GLXtWfgmhnkp6C',
      parentSpanInst
    );
    try {
      bh.send = {
        collection: 'loans',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ihonYKFe0Arb8V2X(bh, parentSpanInst);
      //appendnew_next_sd_a3GLXtWfgmhnkp6C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3GLXtWfgmhnkp6C',
        spanInst,
        'sd_a3GLXtWfgmhnkp6C'
      );
    }
  }

  async sd_ihonYKFe0Arb8V2X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ihonYKFe0Arb8V2X',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NP41EUmvntzAzFY1(bh, parentSpanInst);
      //appendnew_next_sd_ihonYKFe0Arb8V2X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ihonYKFe0Arb8V2X',
        spanInst,
        'sd_ihonYKFe0Arb8V2X'
      );
    }
  }

  async sd_NP41EUmvntzAzFY1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NP41EUmvntzAzFY1',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.send.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mbhENd6X7IKiPJAt(bh, parentSpanInst);
      //appendnew_next_sd_NP41EUmvntzAzFY1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NP41EUmvntzAzFY1',
        spanInst,
        'sd_NP41EUmvntzAzFY1'
      );
    }
  }

  async sd_mbhENd6X7IKiPJAt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mbhENd6X7IKiPJAt');
    }
  }

  async sd_YipzuufjTxx4VnN2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YipzuufjTxx4VnN2',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'loans',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_i0RPlQBKjEkLTRQX(bh, parentSpanInst);
      //appendnew_next_sd_YipzuufjTxx4VnN2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YipzuufjTxx4VnN2',
        spanInst,
        'sd_YipzuufjTxx4VnN2'
      );
    }
  }

  async sd_i0RPlQBKjEkLTRQX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i0RPlQBKjEkLTRQX',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eAczU2y4dCAH1VRy(bh, parentSpanInst);
      //appendnew_next_sd_i0RPlQBKjEkLTRQX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i0RPlQBKjEkLTRQX',
        spanInst,
        'sd_i0RPlQBKjEkLTRQX'
      );
    }
  }

  async sd_eAczU2y4dCAH1VRy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eAczU2y4dCAH1VRy',
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
        'sd_eAczU2y4dCAH1VRy',
        spanInst,
        'sd_eAczU2y4dCAH1VRy'
      );
    }
  }

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_plmM1gpstsznqClp(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vPGWB5yrPQsZM1aj',
        spanInst,
        'success'
      );
    }
  }

  async sd_plmM1gpstsznqClp(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_plmM1gpstsznqClp');
    }
  }

  async notFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFound', parentSpanInst);
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_plmM1gpstsznqClp(bh, parentSpanInst);
      //appendnew_next_notFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qXjYM4fxOps0qfRO',
        spanInst,
        'notFound'
      );
    }
  }

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
        'sd_Uu80lqbuy1yUpJx2',
        spanInst,
        'mongoDb'
      );
    }
  }

  async sd_CiIL3tc2dQmojqMa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CiIL3tc2dQmojqMa',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'electricity',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0gb53WAfZszAQnM3(bh, parentSpanInst);
      //appendnew_next_sd_CiIL3tc2dQmojqMa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CiIL3tc2dQmojqMa',
        spanInst,
        'sd_CiIL3tc2dQmojqMa'
      );
    }
  }

  async sd_0gb53WAfZszAQnM3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0gb53WAfZszAQnM3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PJfVuB3NawONkGpe(bh, parentSpanInst);
      //appendnew_next_sd_0gb53WAfZszAQnM3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0gb53WAfZszAQnM3',
        spanInst,
        'sd_0gb53WAfZszAQnM3'
      );
    }
  }

  async sd_PJfVuB3NawONkGpe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PJfVuB3NawONkGpe',
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
        bh = await this.good(bh, parentSpanInst);
      } else {
        bh = await this.bad(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PJfVuB3NawONkGpe',
        spanInst,
        'sd_PJfVuB3NawONkGpe'
      );
    }
  }

  async good(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('good', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vxbTMeU5kM3dc30W(bh, parentSpanInst);
      //appendnew_next_good
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BzvGgfRwpIs26TPW',
        spanInst,
        'good'
      );
    }
  }

  async sd_vxbTMeU5kM3dc30W(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vxbTMeU5kM3dc30W');
    }
  }

  async bad(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('bad', parentSpanInst);
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_vxbTMeU5kM3dc30W(bh, parentSpanInst);
      //appendnew_next_bad
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UnwJb79UoxRi9cYA',
        spanInst,
        'bad'
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
  //appendnew_flow_money_Catch
}
