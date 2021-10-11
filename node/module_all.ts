// Keep in sync with ./module_all_star.ts
import assert from "./assert.ts";
import assertStrict from "./assert/strict.ts";
import buffer from "./buffer.ts";
import crypto from "./crypto.ts";
import console from "./console.ts";
import constants from "./constants.ts";
import childProcess from "./child_process.ts";
import dns from "./dns.ts";
import events from "./events.ts";
import fs from "./fs.ts";
import fsPromises from "./fs/promises.ts";
import net from "./net.ts";
import os from "./os.ts";
import path from "./path.ts";
import perfHooks from "./perf_hooks.ts";
import querystring from "./querystring.ts";
import stream from "./stream.ts";
import stringDecoder from "./string_decoder.ts";
import timers from "./timers.ts";
import tty from "./tty.ts";
import url from "./url.ts";
import util from "./util.ts";
// TODO(kt3k): add these modules when implemented
// import cluster from "./cluster.ts";
// import dgram from "./dgram.ts";
// import http from "./http.ts";
// import http2 from "./http2.ts";
// import https from "./https.ts";
// import readline from "./readline.ts";
// import repl from "./repl.ts";
// import sys from "./sys.ts";
// import tls from "./tls.ts";
// import vm from "./vm.ts";
// import workerThreads from "./worker_threads.ts";
// import zlib from "./zlib.ts";

// Canonical mapping of supported modules
export default {
  assert,
  "assert/strict": assertStrict,
  buffer,
  crypto,
  console,
  constants,
  "child_process": childProcess,
  dns,
  events,
  fs,
  "fs/promises": fsPromises,
  net,
  os,
  path,
  "perf_hooks": perfHooks,
  querystring,
  stream,
  "string_decoder": stringDecoder,
  timers,
  tty,
  url,
  util,
} as Record<string, unknown>;
