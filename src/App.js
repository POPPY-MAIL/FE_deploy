import { React } from "react";

import WelcomePage from "./pages/welcomePage";
import JoinPage from "./pages/JoinPage";
import HowToPage from "./pages/HowToPage";
import HowToUnlogPage from "./pages/HowToUnlogPage";
import JoinCompletePage from "./pages/JoinCompletePage";
import CreatePostBoxPage1 from "./pages/CreatePostBoxPage1";
import CreatePostBoxPage2 from "./pages/CreatePostBoxPage2";
import CreatePostBoxPage3 from "./pages/CreatePostBoxPage3";
import KakaoPlusPage from "./pages/KakaoPlusPage";
import ReceivedLetterPage from "./pages/ReceivedLetterPage";
import JoinInfoPage from "./pages/JoinInfoPage";
import LetterPage from "./pages/LetterPage";
import WriteMailPage from "./pages/WriteMailPage";
import CheckWriteMailPage from "./pages/CheckWriteMailPage";
import CompleteWriteMailPage from "./pages/CompleteWriteMailPage";
import MyPostboxPage from "./pages/MyPostboxPage";
import CheckArrivedMailPage from "./pages/CheckArrivedMailPage";
import WithdrawalPage from "./pages/WithdrawalPage";

import * as S from "./styles/globalstyle";
import Background from "./image/background.png";

import "./App.css";

import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./lib/PublicRoute";
import PrivateRoute from "./lib/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="full">
          <S.SuperDiv id="super">
            <S.BackgroundImg>
              <img className="background" src={Background} alt="background" />
            </S.BackgroundImg>
            <Switch>
              {/* <Route exact path="/" component={WelcomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/join" component={JoinPage} />
            <Route exact path="/joininfo" component={JoinInfoPage} />
            <Route exact path="/joincomplete" component={JoinCompletePage} />
            <Route exact path="/howto" component={HowToPage} />
            <Route
              exact
              path="/createpostboxstepone"
              component={CreatePostBoxPage1}
            />
            <Route
              exact
              path="/createpostboxsteptwo"
              component={CreatePostBoxPage2}
            />
            <Route
              exact
              path="/createpostboxstepthree"
              component={CreatePostBoxPage3}
            />
            <Route exact path="/kakaoplus" component={KakaoPlusPage} />
            <Route
              exact
              path="/receivedletter"
              component={ReceivedLetterPage}
            />
            <Route exact path="/letswritemail" component={LetsWriteMailPage} />
            <Route exact path="/writemail" component={WriteMailPage} />
            <Route
              exact
              path="/checkwritemail"
              component={CheckWriteMailPage}
            />
            <Route
              exact
              path="/completewritemail"
              component={CompleteWriteMailPage}
            />
            <Route exact path="/mypostbox" component={MyPostboxPage} />
            <Route
              exact
              path="/checkarrivedmail"
              component={CheckArrivedMailPage}
            />
            <Route exact path="/withdrawal" component={WithdrawalPage} /> */}
              <PublicRoute component={WelcomePage} path="/" exact />
              <PublicRoute restricted component={JoinPage} path="/join" exact />
              <PublicRoute component={JoinInfoPage} path="/joininfo" exact />
              <PublicRoute
                component={JoinCompletePage}
                path="/joincomplete"
                exact
              />
              <PublicRoute
                component={HowToUnlogPage}
                path="/howtounlog"
                exact
              />
              <PrivateRoute component={HowToPage} path="/howto" exact />
              <PrivateRoute
                component={CreatePostBoxPage1}
                path="/createpostboxstepone"
                exact
              />
              <PrivateRoute
                component={CreatePostBoxPage2}
                path="/createpostboxsteptwo"
                exact
              />
              <PrivateRoute
                component={CreatePostBoxPage3}
                path="/createpostboxstepthree"
                exact
              />
              <PrivateRoute component={KakaoPlusPage} path="/kakaoplus" exact />
              <PrivateRoute
                component={ReceivedLetterPage}
                path="/receivedletter"
                exact
              />

              <PublicRoute
                component={LetterPage}
                path="/letter/:mailbox_pk/:random_strkey/"
                exact
              />
              <PublicRoute
                component={WriteMailPage}
                path="/writemail/:mailbox_pk/:random_strkey/"
                exact
              />
              <PublicRoute
                component={CheckWriteMailPage}
                path="/checkwritemail"
                exact
              />
              <PublicRoute
                component={CompleteWriteMailPage}
                path="/completewritemail"
                exact
              />

              <PrivateRoute component={MyPostboxPage} path="/mypostbox" exact />
              <PrivateRoute
                component={CheckArrivedMailPage}
                path="/checkarrivedmail/:mailbox_pk/letters/"
                exact
              />
              <PrivateRoute
                component={WithdrawalPage}
                path="/withdrawal"
                exact
              />
            </Switch>
          </S.SuperDiv>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
