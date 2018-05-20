// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Ospec = require("ospec");
var Future = require("../src/Future.bs.js");
var BsOspec = require("bs-ospec/src/BsOspec.bs.js");

Ospec.spec("Future", (function () {
        var delay = function (ms, f) {
          return Future.make((function (resolve) {
                        setTimeout((function () {
                                return Curry._1(resolve, Curry._1(f, /* () */0));
                              }), ms);
                        return /* () */0;
                      }));
        };
        Ospec("sync chaining", (function () {
                return Future.map((function (s) {
                              return (function (eta) {
                                          return BsOspec.equals("one!", /* None */0, eta);
                                        })(s);
                            }), Future.map((function (s) {
                                  return s + "!";
                                }), Future.value("one")));
              }));
        Ospec("async chaining", (function (done_) {
                return Future.get((function (s) {
                              ((function (eta) {
                                      return BsOspec.equals("20!", /* None */0, eta);
                                    })(s));
                              return Curry._1(done_, /* () */0);
                            }), Future.map((function (s) {
                                  return s + "!";
                                }), Future.map((function (s) {
                                      return String(s);
                                    }), delay(25, (function () {
                                          return 20;
                                        })))));
              }));
        Ospec("tap", (function () {
                var v = [0];
                return Future.get((function (n) {
                              ((function (eta) {
                                      return BsOspec.equals(90, /* None */0, eta);
                                    })(n));
                              return (function (eta) {
                                          return BsOspec.equals(100, /* None */0, eta);
                                        })(v[0]);
                            }), Future.map((function (n) {
                                  return n - 9 | 0;
                                }), Future.tap((function (n) {
                                      v[0] = n + 1 | 0;
                                      return /* () */0;
                                    }), Future.value(99))));
              }));
        Ospec("flatMap", (function () {
                return Future.get((function (n) {
                              return (function (eta) {
                                          return BsOspec.equals(60, /* None */0, eta);
                                        })(n);
                            }), Future.flatMap((function (n) {
                                  return Future.value(n + 1 | 0);
                                }), Future.value(59)));
              }));
        Ospec("multiple gets", (function () {
                var count = [0];
                var future = Future.make((function (resolve) {
                        count[0] = count[0] + 1 | 0;
                        return Curry._1(resolve, count[0]);
                      }));
                ((function (eta) {
                        return BsOspec.equals(1, /* None */0, eta);
                      })(count[0]));
                Future.get((function (c) {
                        return (function (eta) {
                                    return BsOspec.equals(1, /* None */0, eta);
                                  })(c);
                      }), future);
                ((function (eta) {
                        return BsOspec.equals(1, /* None */0, eta);
                      })(count[0]));
                Future.get((function (c) {
                        return (function (eta) {
                                    return BsOspec.equals(1, /* None */0, eta);
                                  })(c);
                      }), future);
                return (function (eta) {
                            return BsOspec.equals(1, /* None */0, eta);
                          })(count[0]);
              }));
        Ospec("multiple gets (async)", (function (done_) {
                var count = [0];
                var future = Future.map((function () {
                        count[0] = count[0] + 1 | 0;
                        return /* () */0;
                      }), delay(25, (function () {
                            return 0;
                          })));
                BsOspec.equals(0, /* Some */["Count is async"], count[0]);
                Future.get((function () {
                        return BsOspec.equals(1, /* Some */["Runs after previous future"], count[0]);
                      }), future);
                BsOspec.equals(0, /* Some */["Count is async (2)"], count[0]);
                Future.get((function () {
                        return BsOspec.equals(1, /* Some */["Previous future only runs once"], count[0]);
                      }), future);
                BsOspec.equals(0, /* Some */["Count is async (3)"], count[0]);
                return Future.get((function () {
                              return Curry._1(done_, /* () */0);
                            }), future);
              }));
        return /* () */0;
      }));

/*  Not a pure module */