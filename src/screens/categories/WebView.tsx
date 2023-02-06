import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  const INJECTED_JAVASCRIPT = `
    const elements = document.getElementsByClassName('dxsplPane_SoftOrange');
    const elements1 = document.getElementsByClassName('dxisControl_SoftOrange'); 
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    } 
    for (let i = 0; i < elements1.length; i++) {
      elements1[i].style.display = "none";
    } 
    `;

  return (
    <WebView
      injectedJavaScript={INJECTED_JAVASCRIPT}
      // javaScriptEnabled={false}
     source={{ uri: "http://www.druginfo.mohs.mn/#ViewID=UDB_DISProductQuantity_DetailView&ObjectKey=3&ObjectClassName=UIS.UDB_DISProductQuantity&mode=View" }}
     style={styles.container}

    />
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex     : 1,
    marginTop: 50
  }
});