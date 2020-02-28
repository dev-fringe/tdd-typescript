# tdd-typescript
typescript, webpack, react, alsatian, spring like .. ing maybe doestn't
## back-end log
* 16:24:34.412 [XNIO-1 I/O-8] DEBUG org.springframework.web.server.adapter.HttpWebHandlerAdapter - [12015a8b] HTTP GET "/person"
* 16:24:34.552 [XNIO-1 I/O-8] DEBUG org.springframework.web.reactive.function.server.support.RouterFunctionMapping - [12015a8b] Mapped to dev.fringe.web.function.configuration.RoutingConfiguration$$Lambda$146/533415944@75c2579
* 16:24:34.829 [XNIO-1 I/O-8] DEBUG org.springframework.web.HttpLogging - [12015a8b] Encoding [[Person(name=John Doe, age=42), Person(name=Jane Doe, age=36)]]
* 16:24:34.991 [XNIO-1 I/O-8] DEBUG org.springframework.web.server.adapter.HttpWebHandlerAdapter - [12015a8b] Completed 200 OK

## front-end tdd log
* TAP version 13
* 1..1
* FIXTURE TestExample
* ok 1 TestExample > unitTest
* Received response from: Jane Doe
