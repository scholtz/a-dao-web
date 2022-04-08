<template>
  <PublicLayout>
    <div class="container-fluid">
      <div
        class="
          row
          row-cols-1
          row-cols-sm-2
          row-cols-md-2
          row-cols-lg-2
          row-cols-xl-2
          row-cols-xxl-2
          g-4
        "
      >
        <div class="col">
          <h2>Startup checkpoints</h2>
          <ol class="list-group list-group-flush list-group-numbered">
            <li class="list-group-item">
              Create your token. Use AWallet capabilities of doing multisign
              operations to ensure enterprise level security or vanity account.
              <a href="https://www.a-wallet.net">Create your wallet</a>
            </li>
            <li class="list-group-item">
              Ensure decentralized onchain decision making using open
              specifications and open source applications. Vote coin now allows
              also encrypted voting, so that nobody can see other vote cast
              while voting session is in progress.
              <a href="https://www.vote-coin.com">www.vote-coin.com</a>
            </li>
            <li class="list-group-item">
              Verify your asset at Pera Wallet, and upload your icons and token
              ids to tinyman public
              <a href="https://github.com/tinymanorg/asa-list">
                list of tokens</a
              >.
            </li>
            <li class="list-group-item">
              Issue your tokens at exchanges. Algodex - onchain orderbook
              trading platform, Automated market maker smart contract webs -
              Pact.Fi, TinyMan, AlgoFi, HumbleSwap. We recommend to start with
              Pact.Fi 0,01% pool fee and TinyMan and distribute AMM staking
              using tool below.
            </li>
            <li class="list-group-item">
              Check your ASA price development at
              <a href="https://tinychart.org/asset/452399768">tinychart.org</a>.
            </li>
            <li class="list-group-item">
              Motivate people to hold your ASA - give them percentage of return
              if they own minimum trashold - community staking program.
              <a href="https://github.com/scholtz/AlgorandStakingBot"
                >https://github.com/scholtz/AlgorandStakingBot</a
              >
            </li>
            <li class="list-group-item">
              Motivate people to hold your ASA in AMM pools - give liquidity
              providers percentage of return if they hold the money at the pool
              of your selection
              <a href="https://github.com/scholtz/AlgorandAMMStakingBot"
                >https://github.com/scholtz/AlgorandAMMStakingBot</a
              >
            </li>
            <li class="list-group-item">
              Deliver your tokens to the investors on the market - define and
              publish easy to understand and verifiable rules, and earn money
              for your DAO activities
              <a href="https://github.com/scholtz/tinyman-bot"
                >https://github.com/scholtz/tinyman-bot</a
              >
            </li>
            <li class="list-group-item">
              Make your DAO visible in the ecosystem - Publish your products and
              services also to our algorand directory.
              <a href="https://www.a-dir.net">https://www.a-dir.net</a>
            </li>
            <li class="list-group-item">
              Use our authentication tools. Open source ARC-0014 standard
              implementation for algorand authentication, and hasura graphQL
              server authentication webhook which allows verifying ARC-0014
              authentication token and serving graphql data using asynchronous
              subscriptions and providing users with the real time authenticated
              data on your website.
              <a href="https://github.com/scholtz/AlgorandAuthenticationDotNet"
                >https://github.com/scholtz/AlgorandAuthenticationDotNet</a
              >
              <a href="https://github.com/scholtz/HasuraAlgorandAuthWebHook"
                >https://github.com/scholtz/HasuraAlgorandAuthWebHook</a
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>

<script>
import PublicLayout from "../layouts/Public.vue";

export default {
  components: {
    PublicLayout,
  },
};
</script>