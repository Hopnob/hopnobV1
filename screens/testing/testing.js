import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
 import { useEffect } from "react";
import { initializeApp,getApp} from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 
        apiKey: "AIzaSyAcz7MI-8_HSeAiZsEz5mlyfGlI_jmpxwY",
        authDomain: "micro-citadel-359610.firebaseapp.com",
        projectId: "micro-citadel-359610",
        storageBucket: "micro-citadel-359610.appspot.com",
        messagingSenderId: "34345464363",
        appId: "1:34345464363:web:96b25a028d826aa8d8b06e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (!app?.options || Platform.OS === 'web') {
    throw new Error(
      'This example only works on Android or iOS, and requires a valid Firebase config.'
    );
  }


  
export default function TestingPageOtp(){
    const recaptchaVerifier = React.useRef(null);
    // const [phoneNumber, setPhoneNumber] = React.useState();
    
    const phoneNumber = "+919772814843";
            
    const [verificationId, setVerificationId] = React.useState();
    const [verificationCode, setVerificationCode] = React.useState();
  
    const firebaseConfig = app ? app.options : undefined;
    const [message, showMessage] = React.useState();
    const attemptInvisibleVerification = false;
    return (
        <View style={{ padding: 20, marginTop: 50 }}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
          // attemptInvisibleVerification
        />
        <Text style={{ marginTop: 20 }}>Enter phone number</Text>
        {/* <TextInput
          style={{ marginVertical: 10, fontSize: 17 }}
          placeholder="+1 999 999 9999"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          value={phoneNumber}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
        /> */}
        <Button
          title="Send Verification Code"
          disabled={!phoneNumber}
          onPress={
            async () => {
            // The FirebaseRecaptchaVerifierModal ref implements the
            // FirebaseAuthApplicationVerifier interface and can be
            // passed directly to `verifyPhoneNumber`.
            try {
              const phoneProvider = new PhoneAuthProvider(auth);
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
              );
              setVerificationId(verificationId);
              showMessage({
                text: 'Verification code has been sent to your phone.',
              });
            } catch (err) {
              showMessage({ text: `Error: ${err.message}`, color: 'red' });
            }
          }}
        />
        <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
        <TextInput
          style={{ marginVertical: 10, fontSize: 17 }}
          editable={!!verificationId}
          placeholder="123456"
          onChangeText={setVerificationCode}
        />
        <Button
          title="Confirm Verification Code"
          disabled={!verificationId}
          onPress={async () => {
            try {
              const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
              await signInWithCredential(auth, credential);
              showMessage({ text: 'Phone authentication successful 👍' });
            } catch (err) {
              showMessage({ text: `Error: ${err.message}`, color: 'red' });
            }
          }}
        />
        {message ? (
          <TouchableOpacity
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 0xffffffee, justifyContent: 'center' },
            ]}
            onPress={() => showMessage(undefined)}>
            <Text
              style={{
                color: message.color || 'blue',
                fontSize: 17,
                textAlign: 'center',
                margin: 20,
              }}>
              {message.text}
            </Text>
          </TouchableOpacity>
        ) : undefined}
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
      </View>
    );
}