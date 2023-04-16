<template>
  <PublicLayout>
    <div class="container-fluid">
      <div
        class="
          row
          row-cols-1
          row-cols-sm-1
          row-cols-md-1
          row-cols-lg-1
          row-cols-xl-2
          row-cols-xxl-2
          g-4
        "
      >
        <div class="col">
          <h2>Startup checkpoints</h2>
          <table>
            <tr>
              <td>
                <Checkbox
                  id="C_TokenCreated"
                  v-model="C_TokenCreated"
                  :binary="true"
                />
              </td>
              <td>
                <span
                  style="cursor: pointer"
                  @click="C_TokenCreated = !C_TokenCreated"
                >
                  Create your token. Use AWallet capabilities of doing multisign
                  operations to ensure enterprise level security or vanity
                  account. AWallet supports multisig ledger protected accounts with combination of wallet connect so that user can use Algorand DeFi in user friendly manner.
                </span>
                <a target="_blank" href="https://www.a-wallet.net"
                  >Create your wallet</a
                >, 
                <a target="_blank" href="https://github.com/scholtz/wallet"
                  >Source code</a
                >
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_TokenCreatedAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=w8ifGtC3Y1Q"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox id="C_VoteCoin" v-model="C_VoteCoin" :binary="true" />
              </td>
              <td>
                <span style="cursor: pointer" @click="C_VoteCoin = !C_VoteCoin">
                  Ensure decentralized onchain decision making using open
                  specifications and open source applications. Vote coin now
                  allows also encrypted voting, so that nobody can see other
                  vote cast while voting session is in progress.
                </span>
                <a target="_blank" href="https://www.vote-coin.com"
                  >www.vote-coin.com</a
                >, 
                <a target="_blank" href="https://www.vote-coin.com/solutions-and-tutorials/open-source-solutions"
                  >Source codes of multiple applications</a
                >
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_VoteCoinAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=D8EMw8ddnyw"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox id="C_IDO" v-model="C_IDO" :binary="true" />
              </td>
              <td>
                <span style="cursor: pointer" @click="C_IDO = !C_IDO"
                  >Issue your tokens at exchanges.
                  <a target="_blank" href="https://app.algodex.com">Algodex</a>
                  - onchain orderbook trading platform, Automated market maker
                  smart contract webs -
                  <a target="_blank" href="https://app.pact.fi">Pact.Fi</a>,
                  <a target="_blank" href="https://app.tinyman.com">TinyMan</a>,
                  <a target="_blank" href="https://app.algofi.org/swap"
                    >AlgoFi</a
                  >,
                  <a target="_blank" href="https://app.humble.sh/pool"
                    >HumbleSwap</a
                  >. We recommend to start with Pact.Fi 0,01% pool fee and
                  TinyMan and distribute AMM staking using tool below.
                </span>
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_IDOAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://docs.pact.fi/pact/how-to/pools"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox
                  id="C_TinyChart"
                  v-model="C_TinyChart"
                  :binary="true"
                />
              </td>
              <td>
                <span
                  style="cursor: pointer"
                  @click="C_TinyChart = !C_TinyChart"
                  >Check your ASA price development at
                </span>
                <a target="_blank" href="https://vestige.fi/asset/452399768"
                  >Vestige</a
                >.
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_TinyChartAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://vestige.fi"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox id="C_ChatBot" v-model="C_ChatBot" :binary="true" />
              </td>
              <td>
                <span style="cursor: pointer" @click="C_ChatBot = !C_ChatBot">
                  Start building your community at discord. Customize our
                </span>
                <a
                  target="_blank"
                  href="https://github.com/scholtz/vote_coin-chatbot/"
                  >open source AI powered chat bot</a
                >

                <span style="cursor: pointer" @click="C_ChatBot = !C_ChatBot">
                  for your needs.</span
                >
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_ChatBotAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://github.com/scholtz/vote_coin-chatbot/blob/main/README.md"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox
                  id="C_CommunityStaking"
                  v-model="C_CommunityStaking"
                  :binary="true"
                />
              </td>
              <td>
                <span
                  style="cursor: pointer"
                  @click="C_CommunityStaking = !C_CommunityStaking"
                >
                  Motivate people to hold your ASA - give them percentage of
                  return if they own minimum trashold or if they own the AMM token. Fairly distribute your tokens.
                </span>
                <a
                  target="_blank"
                  href="https://github.com/scholtz/AlgorandAMMStakingBot"
                  >https://github.com/scholtz/AlgorandAMMStakingBot</a
                >
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="
                    C_CommunityStakingAction ? 'btn-primary' : 'btn-light'
                  "
                  target="_blank"
                  href="https://github.com/scholtz/AlgorandAMMStakingBot/blob/master/README.md"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox
                  id="C_AlgoDirectory"
                  v-model="C_AlgoDirectory"
                  :binary="true"
                />
              </td>
              <td>
                <span
                  style="cursor: pointer"
                  @click="C_AlgoDirectory = !C_AlgoDirectory"
                >
                  Make your DAO visible in the ecosystem - Publish your products
                  and services also to the official algorand directory.
                </span>
                <a target="_blank" href="https://ecosystem.algorand.com/"
                  >https://ecosystem.algorand.com/</a
                >
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_AlgoDirectoryAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://ecosystem.algorand.com/login?redirectTo=/submit-project"
                  >Help</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <Checkbox
                  id="C_AuthTools"
                  v-model="C_AuthTools"
                  :binary="true"
                />
              </td>
              <td>
                <span
                  style="cursor: pointer"
                  @click="C_AuthTools = !C_AuthTools"
                >
                  Use our authentication tools. Open source ARC-0014 standard
                  implementation for algorand authentication, and hasura graphQL
                  server authentication webhook which allows verifying ARC-0014
                  authentication token and serving graphql data using
                  asynchronous subscriptions and providing users with the real
                  time authenticated data on your website.
                </span>
                <a
                  target="_blank"
                  href="https://github.com/scholtz/AlgorandAuthenticationDotNet"
                  >https://github.com/scholtz/AlgorandAuthenticationDotNet</a
                >,
                <a
                  target="_blank"
                  href="https://github.com/scholtz/HasuraAlgorandAuthWebHook"
                  >https://github.com/scholtz/HasuraAlgorandAuthWebHook</a
                >
              </td>
              <td>
                <a
                  class="btn form-control"
                  :class="C_AuthToolsAction ? 'btn-primary' : 'btn-light'"
                  target="_blank"
                  href="https://github.com/scholtz/HasuraAlgorandAuthWebHook"
                  >Help</a
                >
              </td>
            </tr>
          </table>
        </div>
        <div class="col">
          <div class="m-5">
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/L1vegLTOZrE"
            />
          </div>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>

<script>
import PublicLayout from "../layouts/Public.vue";
import Checkbox from "primevue/checkbox";

export default {
  components: {
    PublicLayout,
    Checkbox,
  },
  data() {
    return {
      C_TokenCreated: false,
      C_VoteCoin: false,
      C_IDO: false,
      C_TinyChart: false,
      C_ChatBot: false,
      C_CommunityStaking: false,
      C_AMMStaking: false,
      C_SellToken: false,
      C_AlgoDirectory: false,
      C_AuthTools: false,
    };
  },
  computed: {
    C_TokenCreatedAction() {
      return !this.C_TokenCreated;
    },
    C_VoteCoinAction() {
      return this.C_TokenCreated && !this.C_VoteCoin;
    },
    C_IDOAction() {
      return this.C_TokenCreated && this.C_VoteCoin && !this.C_IDO;
    },
    C_TinyChartAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        !this.C_TinyChart
      );
    },
    C_ChatBotAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        this.C_TinyChart &&
        !this.C_ChatBot
      );
    },
    C_CommunityStakingAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        this.C_TinyChart &&
        this.C_ChatBot &&
        !this.C_CommunityStaking
      );
    },
    C_AMMStakingAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        this.C_TinyChart &&
        this.C_ChatBot &&
        this.C_CommunityStaking &&
        !this.C_AMMStaking
      );
    },
    C_SellTokenAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        this.C_TinyChart &&
        this.C_ChatBot &&
        this.C_CommunityStaking &&
        this.C_AMMStaking &&
        !this.C_SellToken
      );
    },
    C_AlgoDirectoryAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        this.C_TinyChart &&
        this.C_ChatBot &&
        this.C_CommunityStaking &&
        this.C_AMMStaking &&
        this.C_SellToken &&
        !this.C_AlgoDirectory
      );
    },
    C_AuthToolsAction() {
      return (
        this.C_TokenCreated &&
        this.C_VoteCoin &&
        this.C_IDO &&
        this.C_TinyChart &&
        this.C_ChatBot &&
        this.C_CommunityStaking &&
        this.C_AMMStaking &&
        this.C_SellToken &&
        this.C_AlgoDirectory &&
        !this.C_AuthTools
      );
    },
  },
  watch: {
    C_TokenCreated() {
      return localStorage.setItem("C_TokenCreated", !!this.C_TokenCreated);
    },
    C_VoteCoin() {
      return localStorage.setItem("C_VoteCoin", !!this.C_VoteCoin);
    },
    C_IDO() {
      return localStorage.setItem("C_IDO", !!this.C_IDO);
    },
    C_TinyChart() {
      return localStorage.setItem("C_TinyChart", !!this.C_TinyChart);
    },
    C_ChatBot() {
      return localStorage.setItem("C_ChatBot", !!this.C_ChatBot);
    },
    C_CommunityStaking() {
      return localStorage.setItem(
        "C_CommunityStaking",
        !!this.C_CommunityStaking
      );
    },
    C_AMMStaking() {
      return localStorage.setItem("C_AMMStaking", !!this.C_AMMStaking);
    },
    C_SellToken() {
      return localStorage.setItem("C_SellToken", !!this.C_SellToken);
    },
    C_AlgoDirectory() {
      return localStorage.setItem("C_AlgoDirectory", !!this.C_AlgoDirectory);
    },
    C_AuthTools() {
      return localStorage.setItem("C_AuthTools", !!this.C_AuthTools);
    },
  },
  mounted() {
    this.C_TokenCreated = JSON.parse(localStorage.getItem("C_TokenCreated"));
    this.C_VoteCoin = JSON.parse(localStorage.getItem("C_VoteCoin"));
    this.C_IDO = JSON.parse(localStorage.getItem("C_IDO"));
    this.C_TinyChart = JSON.parse(localStorage.getItem("C_TinyChart"));
    this.C_ChatBot = JSON.parse(localStorage.getItem("C_ChatBot"));
    this.C_CommunityStaking = JSON.parse(
      localStorage.getItem("C_CommunityStaking")
    );
    this.C_AMMStaking = JSON.parse(localStorage.getItem("C_AMMStaking"));
    this.C_SellToken = JSON.parse(localStorage.getItem("C_SellToken"));
    this.C_AlgoDirectory = JSON.parse(localStorage.getItem("C_AlgoDirectory"));
    this.C_AuthTools = JSON.parse(localStorage.getItem("C_AuthTools"));
  },
};
</script>