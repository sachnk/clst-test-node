# Shared

Types:

- <code><a href="./src/resources/shared.ts">PNLSummary</a></code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">Entity</a></code>
- <code><a href="./src/resources/entities.ts">PortfolioMargin</a></code>
- <code><a href="./src/resources/entities.ts">RegTMargin</a></code>
- <code><a href="./src/resources/entities.ts">RegTMarginSimulation</a></code>
- <code><a href="./src/resources/entities.ts">EntityListResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityCreateRegTMarginSimulationResponse</a></code>

Methods:

- <code title="get /entities/{entity_id}">client.entities.<a href="./src/resources/entities.ts">retrieve</a>(entityId) -> Entity</code>
- <code title="get /entities">client.entities.<a href="./src/resources/entities.ts">list</a>() -> EntityListResponse</code>
- <code title="post /entities/{entity_id}/regt-margin-simulations">client.entities.<a href="./src/resources/entities.ts">createRegTMarginSimulation</a>(entityId, { ...params }) -> EntityCreateRegTMarginSimulationResponse</code>
- <code title="get /entities/{entity_id}/pnl-summary">client.entities.<a href="./src/resources/entities.ts">retrievePNLSummary</a>(entityId) -> PNLSummary</code>
- <code title="get /entities/{entity_id}/portfolio-margin">client.entities.<a href="./src/resources/entities.ts">retrievePortfolioMargin</a>(entityId) -> PortfolioMargin</code>
- <code title="get /entities/{entity_id}/regt-margin">client.entities.<a href="./src/resources/entities.ts">retrieveRegTMargin</a>(entityId) -> RegTMargin</code>
- <code title="get /entities/{entity_id}/regt-margin-simulations/{simulation_id}">client.entities.<a href="./src/resources/entities.ts">retrieveRegTMarginSimulation</a>(entityId, simulationId) -> RegTMarginSimulation</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">LocateOrder</a></code>
- <code><a href="./src/resources/accounts.ts">Order</a></code>
- <code><a href="./src/resources/accounts.ts">PNLSummaryForAccount</a></code>
- <code><a href="./src/resources/accounts.ts">Position</a></code>
- <code><a href="./src/resources/accounts.ts">Trade</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountCreateOrdersInBulkResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrievePNLDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(accountId) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>() -> AccountListResponse</code>
- <code title="post /accounts/{account_id}/bulk-orders">client.accounts.<a href="./src/resources/accounts.ts">createOrdersInBulk</a>(accountId, { ...params }) -> AccountCreateOrdersInBulkResponse</code>
- <code title="get /accounts/{account_id}/pnl-details">client.accounts.<a href="./src/resources/accounts.ts">retrievePNLDetails</a>(accountId) -> AccountRetrievePNLDetailsResponse</code>
- <code title="get /accounts/{account_id}/pnl-summary">client.accounts.<a href="./src/resources/accounts.ts">retrievePNLSummary</a>(accountId) -> PNLSummary</code>

# Instruments

Types:

- <code><a href="./src/resources/instruments.ts">Instrument</a></code>

Methods:

- <code title="get /instruments/{symbol}">client.instruments.<a href="./src/resources/instruments.ts">retrieve</a>(symbol, { ...params }) -> Instrument</code>
