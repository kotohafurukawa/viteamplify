import { Authenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../App.css";
import Page1 from "../App.tsx";
import { I18n } from "aws-amplify/utils";
import { Amplify } from "aws-amplify";
import { ResourcesConfig } from "@aws-amplify/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const awsConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: "ap-northeast-1_ekMic15QY",
      userPoolId: "2t5tm2cd247t2jjnbu4q9qm7h6",
    },
  },
};
Amplify.configure(awsConfig);

function Login() {
  return (
    <BrowserRouter>
      <Authenticator>
        {({ user }) => (
          <main>
            {user && (
              <Routes>
                <Route path="/" element={<Page1 />} />
              </Routes>
            )}
          </main>
        )}
      </Authenticator>
    </BrowserRouter>
  );
}

I18n.putVocabularies(translations);
I18n.setLanguage("ja");

export default Login;
