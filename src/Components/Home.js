import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {PhotoCamera, Input} from "@material-ui/icons";
import BackupIcon from '@material-ui/icons/Backup';
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import FaceIcon from '@material-ui/icons/Face';
import './home.css'
import { connect } from "react-redux"

const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            foo: '',
            photoVisible: false,
            remindersVisible: false
        };
        this.foo = this.foo.bind(this);
    }

    printRecText(ocr) {
        if (ocr.lines.length) {
            for (let line of ocr.lines) {
                this.state.foo += line.text;
            }
            console.log(this.state.foo);
            this.setState( state => ( this.state.remindersVisible = true));
        }
        else { console.log('No recognized text.'); }
    }

    async recognizeText(client, mode, url) {
        // To recognize text in a local image, replace client.recognizeText() with recognizeTextInStream() as shown:
        // result = await client.recognizeTextInStream(mode, () => createReadStream(localImagePath));
        let result = await client.recognizeText(mode, url);
        // Operation ID is last path segment of operationLocation (a URL)
        let operation = result.operationLocation.split('/').slice(-1)[0];

        // Wait for text recognition to complete
        // result.status is initially undefined, since it's the result of recognizeText
        while (result.status !== 'Succeeded') { result = await client.getTextOperationResult(operation); }
        return result.recognitionResult;
    }

    async foo() {
        this.setState(state => (this.state.photoVisible = true));
        let key = "555f05a0597f498aab9161ebf261f038";
        let endpoint = "https://karina.cognitiveservices.azure.com/"
        let computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint)
        var describeURL = 'https://moderatorsampleimages.blob.core.windows.net/samples/sample1.jpg';
        var printedText     = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-0/p280x280/82288529_829412280864700_664804952522096640_n.png?_nc_cat=104&_nc_ohc=pDcuolXt7NwAQmcHCOs6u1yL_k7V7Ce5t8TRgLSOeNYZStNFsN_zVww2Q&_nc_ht=scontent-sea1-1.xx&oh=fa437320bc1c6cee95d6e718c1056ee7&oe=5EA31EC8';
        // console.log('Analyzing URL image to describe...', describeURL.split('/').pop());
        // computerVisionClient.describeImage(describeURL).then(x =>
        //     this.setState( state => ({
        //         foo: JSON.stringify(x) }))
        // ).catch(console.log);
        console.log('Recognizing printed text...', printedText.split('/').pop());
        var printed = await this.recognizeText(computerVisionClient, 'Printed', printedText);
        this.printRecText(printed);
        this.setState( state => (this.state.photoVisible = false));
    }


    render() {
        var costs = this.props.medicationCosts && this.props.physio && this.props.medicationCosts.totalToDate && this.props.physio.totalCost ? this.props.medicationCosts.totalToDate + this.props.physio.totalCost : 0;
      return (
          <div>
              <Box display="flex" justifyContent="flex-end">
                  <h6 style={{color: '#3f51b5'}}>HELLO, BARBARA</h6>
                  <FaceIcon />
                  <FaceIcon color="primary" fontSize="large"/>
              </Box>
            <h6 style={{color: 'black'}}>Overview</h6>
             <div className="card black-text">
                 <div className="card-content">
                    <p>Total Cost to Date: {costs}</p>
                 </div>
             </div>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                  <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.foo}>
                      <BackupIcon size="large"/>
                  </IconButton>
                  <h6 style={{color: '#3f51b5'}}>UPLOAD</h6>
                  <form>
                      <input type="file" id="file" placeholder="Choose File"/>
                  </form>
              </Box>
              <h6 style={{color: 'black'}}>Reminders</h6>
              <div className="row">
                  <div className="col s12 m7">
                      { this.state.remindersVisible ?
                          (<div>
                              <div className="card">
                                  <div className="card-content ocr-text" style={{color: 'black'}}>
                                      Eat small amounts of food for the rest of the day. Do not eat any big meals or fatty
                                      or spicy foods today. Return to your normal diet tomorrow.
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-content ocr-text" style={{color: 'black'}}>
                                      Do not drive at all or operate machinery.
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-content ocr-text" style={{color: 'black'}}>
                                      Do not drink any alcohol today.
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-content ocr-text" style={{color: 'black'}}>
                                      Do not sign any legal documents or make any important decisions today.
                                  </div>
                              </div>
                          </div>) : null }
                  </div>
              </div>
              { this.state.photoVisible ? (<img src={require("../images/photo.png")} alt={"Photo"}/>) : null}
          </div>
  );
};
  }

  const mapStatetoProps = (state) => {
    return {
        medicationCosts: state.project.medicationCosts,
        physio: state.project.physio
    }
}
export default connect(mapStatetoProps)(HomeScreen)
//   export default HomeScreen;

