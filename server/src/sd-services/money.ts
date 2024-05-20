// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
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
    //appendnew_flow_money_HttpIn
  }
  //   service flows_money

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
