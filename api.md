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

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">LocateOrder</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">Order</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">PNLSummaryForAccount</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">Position</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">Trade</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountCreateOrdersInBulkResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrievePNLDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountId) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>() -> AccountListResponse</code>
- <code title="post /accounts/{account_id}/bulk-orders">client.accounts.<a href="./src/resources/accounts/accounts.ts">createOrdersInBulk</a>(accountId, { ...params }) -> AccountCreateOrdersInBulkResponse</code>
- <code title="get /accounts/{account_id}/pnl-details">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrievePNLDetails</a>(accountId) -> AccountRetrievePNLDetailsResponse</code>
- <code title="get /accounts/{account_id}/pnl-summary">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrievePNLSummary</a>(accountId) -> PNLSummaryForAccount</code>

## Orders

Types:

- <code><a href="./src/resources/accounts/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/accounts/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/accounts/orders.ts">OrderDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/orders">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">create</a>(accountId, { ...params }) -> OrderCreateResponse</code>
- <code title="get /accounts/{account_id}/orders/{order_id}">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">retrieve</a>(accountId, orderId) -> OrderRetrieveResponse</code>
- <code title="get /accounts/{account_id}/orders">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">list</a>(accountId, { ...params }) -> OrderListResponse</code>
- <code title="delete /accounts/{account_id}/orders">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">delete</a>(accountId, { ...params }) -> OrderDeleteResponse</code>
- <code title="delete /accounts/{account_id}/orders/{order_id}">client.accounts.orders.<a href="./src/resources/accounts/orders.ts">cancel</a>(accountId, orderId) -> void</code>

## Trades

Types:

- <code><a href="./src/resources/accounts/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/trades/{trade_id}">client.accounts.trades.<a href="./src/resources/accounts/trades.ts">retrieve</a>(accountId, tradeId) -> Trade</code>
- <code title="get /accounts/{account_id}/trades">client.accounts.trades.<a href="./src/resources/accounts/trades.ts">list</a>(accountId, { ...params }) -> TradeListResponse</code>

## Positions

Types:

- <code><a href="./src/resources/accounts/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/positions/{symbol}">client.accounts.positions.<a href="./src/resources/accounts/positions.ts">retrieve</a>(accountId, symbol) -> Position</code>
- <code title="get /accounts/{account_id}/positions">client.accounts.positions.<a href="./src/resources/accounts/positions.ts">list</a>(accountId, { ...params }) -> PositionListResponse</code>

## LocateOrders

Types:

- <code><a href="./src/resources/accounts/locate-orders.ts">LocateOrderListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/locate-orders">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">create</a>(accountId, { ...params }) -> LocateOrder</code>
- <code title="get /accounts/{account_id}/locate-orders/{locate_order_id}">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">retrieve</a>(accountId, locateOrderId) -> LocateOrder</code>
- <code title="patch /accounts/{account_id}/locate-orders/{locate_order_id}">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">update</a>(accountId, locateOrderId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/locate-orders">client.accounts.locateOrders.<a href="./src/resources/accounts/locate-orders.ts">list</a>(accountId) -> LocateOrderListResponse</code>

## EasyBorrows

Types:

- <code><a href="./src/resources/accounts/easy-borrows.ts">EasyBorrowListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/easy-borrows">client.accounts.easyBorrows.<a href="./src/resources/accounts/easy-borrows.ts">list</a>(accountId) -> EasyBorrowListResponse</code>

# Instruments

Types:

- <code><a href="./src/resources/instruments.ts">Instrument</a></code>

Methods:

- <code title="get /instruments/{symbol}">client.instruments.<a href="./src/resources/instruments.ts">retrieve</a>(symbol, { ...params }) -> Instrument</code>
