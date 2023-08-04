//console.log("window.location.origin: ",window.location.origin);
  
var is_reconnection = false;
var ws=undefined;
const WS_OPEN_STATE = 1;
/* var abc={}
//https://stackoverflow.com/questions/23051416/uncaught-invalidstateerror-failed-to-execute-send-on-websocket-still-in-co
abc.send = 
function (message, callback2) 
{
    abc.waitForConnection(
							function () 
							{
								//console.log("8888888 sent : "+  JSON.stringify(message) );
								ws.send(message);
								if (typeof callback2 !== 'undefined') 
								{
								  callback2();
								}
							}
						, 1000,message);
};


abc.waitForConnection = 
function (callback, interval,message) 
{
    if (ws.readyState === 1) 
	{
		//console.log("8888888 reday to sent:  "+  JSON.stringify(message) );
        callback();
    } else {
        var that = abc;
		console.log("8888888 waiting: "+  JSON.stringify(message) );
        // optional: implement backoff for interval here
        setTimeout(function () {
            that.waitForConnection(callback, interval);
        }, interval);
    }
};



this.ident = 
function () 
{
    var session = "Test";
    this.send(session, function () 
	{
        window.identified = true;
        theText.value = "Hello!";
        say.click();
        theText.disabled = false;
    });
}; */

function doContainRestrictedCharacters(text22333) 
{
	return text22333.match(/[^a-zA-Z0-9_]/)
}
function ahsanWsSend(message,interval=1000) 
{
	
	
	if (ws.readyState === 1) 
	{
		ws.send(message);
		console.log("8888888 sent:  "+  message );
       
    } 
	else 
	{
      
		console.log("8888888 waiting: "+  message );
        // optional: implement backoff for interval here
        setTimeout(
					function () 
					{
						ahsanWsSend(message,interval)
					}, 1000
				   );
    }
	
}


/*  const modeal4paymentSystem = document.getElementById("modeal4paymentSystem");
var span22 = document.getElementsByClassName("close")[6];
 span22 = document.getElementById("close4modeal4paymentSystem");
span22.onclick = function() {
	modeal4paymentSystem.style.display = "none";
}
 */











var username = document.currentScript.getAttribute("username");
var mail = document.currentScript.getAttribute("mail");



var pathname = location.pathname;
	
	var res = pathname.split("/");
	
	
var isAdmin = false//location.href.includes("6546532f2r542r7641762fu1r276r41f2162");



/* if(isAdmin)
{
	username=res[1]
} */


var url2getEmailInfo="https://connector.eagle3dstreaming.com/getInfoToConstructUrls?email="+mail
function checkAdminStatus()
{
	
callUrl(url2getEmailInfo,
				  
				  function(responseText,status) 
				  {

					var info = JSON.parse(responseText);
				     if(info.isAdmin )
					 {
							isAdmin=true
					 }
				  
					
					onAdminDetemined()
				  },
				  function(responseText,status) 
				  {
					  
					  //e3ds_alert("url2getEmailInfo: error:"+responseText,{timeout: 2000, color: 'red'});
					  //e3ds_alert("url2getEmailInfo: error:"+responseText,{timeout: 2000, color: 'red'});
						//onAdminDetemined()
				  
				  }
				  
		
				  
				  )

}



function getGuestCpInfo()
{
	
	var url="https://fb-server.eagle3dstreaming.com/api/v1/app-config/fetch-membership?mail="
	+
	mail
	//"aninda@eagle3dstreaming.com"
callUrl(url,
				  
				  function(responseText,status) 
				  {
						try 
						{
								var info = JSON.parse(responseText);
							
								var apps=[]
								
								
								apps.push(info.owned)
								
								apps=apps.concat(info.invitedTo)
								
								
							
								if (apps.length <= 1) 
									  return;
								  var Appsfilter = document.getElementById("invitedToUserNames-filter");
								  Appsfilter.style.display = "block"
								  
								  if (Appsfilter) 
								  {
									Appsfilter.innerHTML = "";
									
									 
									
										
										for ( i=0;i<apps.length;i++)
										{
											   var app=apps[i]
											   
											   
											   
											   var option = document.createElement("option");
											   option.value =app
											   
											  option.text  = app;
											  Appsfilter.add(option, i);
											  
										}  
								  
									
									
								  
								  }
						
					  } 
					  catch (e) 
					  {
						console.log(xmlHttp.responseText);
						
						
					  }
					  
					  


					
					
				  },
				  function(responseText,status) 
				  {
					  
					   console.log("getGuestCpInfo: error:"+responseText);
					  //e3ds_alert("getGuestCpInfo: error:"+responseText,{timeout: 2000, color: 'red'});
					  //e3ds_alert("url2getEmailInfo: error:"+responseText,{timeout: 2000, color: 'red'});
						//onAdminDetemined()
				  
				  }
				  
		
				  
				  )

}
 getGuestCpInfo()


function checkAdminStatus2()
{
	 var sfsfs="/getUsername?email=" + mail
	  fetch(sfsfs).then(
		
		respinse => respinse.json()).then(respinse => 
		
		{
            if(respinse.error)
			{
                alert(respinse.error);
                e3ds_alert(respinse.error,{timeout: 2000, color: 'red'});
		
                return;
            }
			console.log(JSON.stringify(respinse));
           
		   if(respinse.isAdmin)
		   {
			   
			   username =res[1]
		   }
             
		}).catch(err => 
		
					{
						alert(JSON.stringify(err.messsage));
					}
		
		);
	
}

//checkAdminStatus()


document.getElementById("user-email").innerHTML = mail;


var isAdminDebugging = false;

function onAdminDetemined()
{
	
	isAdminDebugging=isAdmin
	
//isAdminDebugging=1


var old_console = console;
var old_console_log = console.log;

if (isAdminDebugging != true) {
  console = console || {};
  console.log = function () {};
} else {
  console = old_console;
  console.log = old_console_log;
}


var fsfvsf=res[1]
	if
	(	
		(fsfvsf !=  undefined)
		&&
		(fsfvsf !=  "")
	)
	{
		if (isAdmin)
			username=res[1]
		else
		{
			//var fdsfsf=window.location.href.split("/34fdgsr4t34t5454twert")[0]
			
				//console.log("sfsfs: ",sfsfs);
				window.location.assign(window.location.origin);  
			
		}
	}

if (isAdmin) 
{
	console.log("isAdmin: ",isAdmin);
	
	console.log(" 111111111111111111111111 location.href: " + location.href);
console.log(
  " 111111111111111111111111 location.href: " + location.href.includes("083057")
);
console.log("----------------- urlParams: " + urlParams);
console.log(
  "----------------- window.location.search: " + window.location.search
);
console.log(" res: " + res);
console.log("logged in by  ("+mail+")");
console.log("logged in username  ("+username+")")
console.log(" location.pathname: " + location.pathname);
console.log(res)	
  //document.getElementById("Event_nav").style.display = "block";
  document.getElementById("machine_sec").style.display = "block";
 
 // document.getElementById("CustomUI").style.display = "block";
  document.getElementById("adminCtrl2").style.display = "block";
  document.getElementById("AppVersionFilterDiv").style.display = "block";
  //document.getElementById("new_machines_sec").style.display = "block";
 
  document.getElementById("AdminConfig").style.display = "block";
  document.getElementById("schedule_event_sec").style.display = "block";
  //document.getElementById("onDemandDiv").style.display = "block";
 // document.getElementById("onDemandRegionsFilterDiv").style.display = "block";
  document.getElementById("cost_sec").style.display = "block";
 // document.getElementById("newmachine_nav").style.display = "block";
 
 
  document.getElementById("Paymentbtn").style.display = "block";
  document.getElementById("useVOIPlabel").style.display = "block";
  //document.getElementById("toDO1").style.display = "block";
  document.getElementById("toDO2").style.display = "block";
  document.getElementById("DeleteSelectedApp").style.display = "block";
  document.getElementById("isAdminDebuggingID").style.display = "block";
  //document.getElementById("ForceLandScapeModeTitle").style.display = "block";
  document.getElementById("GenerateDataTableBtn3").style.display = "block";
  document.getElementById("newAnalyticsBtn").style.display = "block";
  document.getElementById("AdminBtn").style.display = "block";
document.getElementById("Admin_sec").style.display = "block";
document.getElementById("MonitoringBtn").style.display = "block";
document.getElementById("Automation_sec").style.display = "block";
document.getElementById("Platform_sec").style.display = "block";	
document.getElementById("Allocator_sec").style.display = "block";	
   document.getElementById("Experimental").style.display = "block";
  // document.getElementById("adminQualitySettings").style.display = "block";
}

document.getElementById("ProgramName_text").innerHTML = username;

		
CheckTrailVersionForThisUser()
setupHtmlEvents();

  connect();
}







document.getElementById("signout").addEventListener("click", logOff);
document.getElementById("Accountbtn").addEventListener("click", gotoAccount);


function signOut()
{
   
	  window.open("https://account.eagle3dstreaming.com/","_blank");
}


function logOff22()
{
    let text= JSON.stringify({continueUrl:window.location.href , timestamp: Date.now() });
    let base=btoa(text);
	var SFSFS="https://account.eagle3dstreaming.com/signin?uri="+base
	console.log("logOff: ",SFSFS)
    window.location.assign(SFSFS);
}


function logOff() {

    window.location.assign("/signoff?route="+window.location.pathname);
}


function gotoAccount() {

    window.location.assign("https://account.eagle3dstreaming.com/");
}

var config=undefined






/* firebase.auth().onAuthStateChanged((user) => 
{
	if (user) {
		
		// console.log("user: ",user);
		 console.log("user.email: ",user.email);
	
	} else {
		
	}
}); 
 */


/* 
var userNameFromUrl=window.location.pathname.split("/")[1]

var urldadad="https://api.eagle3dstreaming.com/v1/config/usersEmail?username="+userNameFromUrl
fetch(urldadad)
.then(

//response => 
response => response.json()).then(response =>

{
  console.log(response);
  
  
                   
  var toPrint=""
  if( response.error !=undefined  )
	  toPrint=response.error
  else
	  toPrint=response.email
  
  
  document.getElementById("user-email").innerHTML = toPrint;
})
.catch(err => {
  console.error(err);
}); */



function findUserNameByEmail(email) 
{
	/* fetch("https://controlpanel.eagle3dstreaming.com/verifySaveUsername", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify({userName: "demo"});
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
}); */

}

function onGettingUserInfo (respinse)
{
			document.getElementById("dedicatedServerApps_sec").style.display = "block";
		document.getElementById("RunningDedicatedServerMachines-filter").style.display = "block";
				
	if( respinse.userinfo == undefined)
	{
		e3ds_alert(respinse,{timeout: 2000, color: 'red'});
		return
	}
	
	
			/*if( isAdmin || respinse.userinfo.is_admin )
			{
				onAdminDetemined()
				
			}*/
			
			//console.log("respinse.userinfo.accessToBufferControl : ",respinse.userinfo.accessToBufferControl);
			
				if(
				//isAdmin || respinse.userinfo.is_admin || 
				
				 (  
					//(username == respinse.userinfo.userName) ??? why it absent in response
					// &&
					 (respinse.userinfo.accessToBufferControl==true)
					 &&
					 (window.location.hostname==respinse.userinfo.cp_fullDomain)
					
				  )
				)
					document.getElementById("Allocator_sec").style.display = "block";
				//else
				//	document.getElementById("Allocator_sec").style.display = "none";
				var dafdafd=username
				console.log(dafdafd) 
				
				
				// if( isAdmin// || respinse.userinfo.is_admin 
				
				// || ( (username == respinse.userinfo.userName) && respinse.userinfo.accessToVoip)
				
				// )
					// document.getElementById("voip_sec").style.display = "block";
				// else
					// document.getElementById("voip_sec").style.display = "none";
				
				document.getElementById("voip_sec").style.display = "block";
				
				/*
				if
				( 
				
				isAdmin || respinse.userinfo.is_admin || 
				
				( 
						//(username == respinse.userinfo.userName) 
						//&& 
						respinse.userinfo.accessToDSL
				 )
				)
				{
					document.getElementById("dedicatedServerApps_sec").style.display = "block";
					
					if( isAdmin || respinse.userinfo.is_admin
						 //|| ( (username == respinse.userinfo.userName) )
						)
						document.getElementById("RunningDedicatedServerMachines-filter").style.display = "block";
					else
						document.getElementById("RunningDedicatedServerMachines-filter").style.display = "none";
					
					
					
					
				}
				else
					document.getElementById("dedicatedServerApps_sec").style.display = "none";
				
				*/
				
				if( 
				//isAdmin || respinse.userinfo.is_admin || 
				
				 (respinse.userinfo.accessToMonitoring==true)
					 &&
					 (window.location.hostname==respinse.userinfo.cp_fullDomain)
					 
				 //( (username == respinse.userinfo.userName) && respinse.userinfo.accessToMonitoring)
				
				)
				{document.getElementById("Admin_sec").style.display = "block";
					document.getElementById("MonitoringBtn").style.display = "block";
				}
				//else
					//document.getElementById("MonitoringBtn").style.display = "none";
				
				
				if( 
				//isAdmin || respinse.userinfo.is_admin || 
				
				(respinse.userinfo.accessToAutomation==true)
					 &&
					 (window.location.hostname==respinse.userinfo.cp_fullDomain)
				
				 //( (username == respinse.userinfo.userName) && respinse.userinfo.accessToAutomation)
				
				)
					document.getElementById("Automation_sec").style.display = "block";
				//else
				//	document.getElementById("Automation_sec").style.display = "none";


}


/*
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        let uid = user.uid;
        // alert("Users email " + user.email + JSON.stringify(user));
        fetch("/getUsername?email=" + user.email).then(
		
		respinse => respinse.json()).then(respinse => 
		
		{
            if(respinse.error)
			{
                alert(respinse.error);
                window.location = '/EntreyUserName';
                return;
            }

            if(window.location.pathname.split("/")[1] !== respinse.userName){
			   //window.location = `/${respinse.userName}/ControlPanel`;
            }
            else
                document.getElementsByTagName("body")[0].style.display = "block";
		}).catch(err => {
			alert(JSON.stringify(err.messsage));
		});
        fetch(`/api/userinfo/?email=${user.email}`)
        .then(respinse => respinse.json())
        .then(respinse => {
            console.log("/api/userinfo/: ",respinse);
			
           onGettingUserInfo(respinse)
				
        }).catch(err => {
            console.error();
        });
    } else {
	
        //document.getElementsByTagName("body")[0].innerHTML = "";
		console.log("no login done. so redirectiong to: ",window.location.origin)
       // window.location.href = window.location.origin;
    }
});*/

	
	
//console.log("userInfo: "+JSON.stringify(userInfo))

	
function getAddress (latitude, longitude) 
{
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();

        var method = 'GET';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true'+"&key=AIzaSyC7wpS8vB3HwdIelUqIEnMODR0M74sNxdY";
		
		//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
		//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
		console.log("EmulatedGeoLocation url: "+url)
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    var data = JSON.parse(request.responseText);
					
					console.log("EmulatedGeoLocation: "+JSON.stringify(data))
                    var address = data.results[0];
                    resolve(address);
                }
                else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
};



//getAddress("19.076", "72.8777").then(console.log).catch(console.error);







	////https://cp_prod2.stream.daregraphic.com/
		//http://example.org:8888/foo/bar#bang
		// window.location.host //example.org:8888
		// window.location.hostname //example.org
		//var  const [ subdomain2,subdomain3 , subdomain4] = window.location.hostname.split(".").reverse();


var selectedAsset2d=undefined


document.getElementById("schedule_event_sec").style.display = "block";
var UseNginex = false;
var sysVersion=5
/* var MML_domainName = undefined;
var MML_matchmakerhttpsPort = undefined;
var FS_httpsPort = undefined;
var FS_DomainName = undefined;
var CP_domainName = undefined; */

var mmlinkerUrl = undefined;
var streamer_platform = undefined;
var Upload_system = undefined;
var fileServerUrl = undefined;
var controlPanelServerUrl = undefined;
var uploaderDomain = undefined;

var webRtcPlayerObj = null;
var print_stats = false;
var print_inputs = false;
var connect_on_load = false;



var qualityControlOwnershipCheckBox;
var matchViewportResolution = true;
// TODO: Remove this - workaround because of bug causing UE to crash when switching resolutions too quickly
var lastTimeResized = new Date().getTime();
var resizeTimeout;

var onDataChannelConnected;
var responseEventListeners = new Map();
var isRangedAnalyticsData = false;

const desiredResWidth = 1920;
const desiredResHeight = 1080;
var rotateOverlayElement;
const connectionTimeout = 40;
var connectionTimer;
var freezeFrameOverlay = null;
var shouldShowPlayOverlay = true;
// A freeze frame is a still JPEG image shown instead of the video.
var freezeFrame = {
  receiving: false,
  size: 0,
  jpeg: undefined,
  height: 0,
  width: 0,
  valid: false,
};

// Optionally detect if the user is not interacting (AFK) and disconnect them.
var afk = {
  enabled: false, // Set to true to enable the AFK system.
  warnTimeout: 300, //900,   // 5,//The time to elapse before warning the user they are inactive.
  closeTimeout: 10, // The time after the warning when we disconnect the user.

  active: true, // Whether the AFK system is currently looking for inactivity.
  overlay: undefined, // The UI overlay warning the user that they are inactive.
  warnTimer: undefined, // The timer which waits to show the inactivity warning overlay.
  countdown: 0, // The inactivity warning overlay has a countdown to show time until disconnect.
  countdownTimer: undefined, // The timer used to tick the seconds shown on the inactivity warning overlay.
};

// If the user focuses on a UE4 input widget then we show them a button to open
// the on-screen keyboard. JavaScript security means we can only show the
// on-screen keyboard in response to a user interaction.
var editTextButton = undefined;

// A hidden input text box which is used only for focusing and opening the
// on-screen keyboard.
var hiddenInput = undefined;



var t0 = Date.now();
function log(str) {
  console.log(`${Math.floor(Date.now() - t0)}: ` + str);
}

var loadingImg = "/images/Loading.gif";
var screenCount = 1;
//var playButtonImg = '/images/PlayButton.png';
var playButtonImg = "/images/Play.png";

function onStartDateChange() {
  var StartDate = document.getElementById("StartDate");
  var StartDatevalue = StartDate.value;
  console.log("StartDatevalue text22: " + StartDatevalue);

  var EndDate = document.getElementById("EndDate");
  EndDate.min = StartDatevalue;

  console.log("EndDate.min: " + EndDate.min);

  //2do-check if EndDate is behaind of startdate or not
}
function onRegionChange4ExistingMachine() {
  var slider = document.getElementById("Slider2AdjustRuiningMachine");
  slider.style.visibility = "hidden";

  var output = document.getElementById("txt_Value_Slider2AdjustRuiningMachine");
  output.style.visibility = "hidden";

  var Regionfilter = document.getElementById("RegionFilter4ExistingMachine");
  var valueRegionfilter =
    Regionfilter.options[Regionfilter.selectedIndex].value;
  var textRegionfilter = Regionfilter.options[Regionfilter.selectedIndex].text;

  console.log("Region text22: " + textRegionfilter);
  console.log("Region value: " + valueRegionfilter);

  var dgsgsg = JSON.stringify({
    type: "sendIntiazliztioninfo",
    owner: username,

    region: valueRegionfilter,
  });

  console.log(" ws.send(): " + JSON.stringify(dgsgsg));
  ws.send(dgsgsg);
}

function onRegionChange() {
  document.getElementById("ApplyBtn4AllocateNewInstances").disabled = true;

  var Regionfilter = document.getElementById("Region-filter");
  var valueRegionfilter =
    Regionfilter.options[Regionfilter.selectedIndex].value;
  var textRegionfilter = Regionfilter.options[Regionfilter.selectedIndex].text;

  console.log("Region text22: " + textRegionfilter);
  console.log("Region value: " + valueRegionfilter);

  var InstanceTypefilter = document.getElementById("InstanceType-filter");
  var valueInstanceTypefilter =
    InstanceTypefilter.options[InstanceTypefilter.selectedIndex]
      .valueInstanceTypefilter;
  var textInstanceTypefilter =
    InstanceTypefilter.options[InstanceTypefilter.selectedIndex].text;

  console.log("InstanceType textInstanceTypefilter: " + textInstanceTypefilter);
  console.log(
    "InstanceType valueInstanceTypefilter: " + valueInstanceTypefilter
  );

  var dgsgsg = JSON.stringify({
    type: "isMachineAllocationPossible4ThisRegion",
    owner: username,
    instanceType: valueInstanceTypefilter,
    region: valueRegionfilter,
  });

  console.log(" ws.send(): " + JSON.stringify(dgsgsg));
  ws.send(dgsgsg);
}


function formatBytes(bytes, decimals = 2) 
{
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function onAppversionChange() 
{
	var AppVersionFilter = document.getElementById("AppVersionFilter");
	
	if(AppVersionFilter.selectedIndex == -1)
		return
	
  var appversionInfoObj= JSON.parse(AppVersionFilter.options[AppVersionFilter.selectedIndex].value)  
  
  
	 var appVersionInfo = document.getElementById("appVersionInfo");
	 var newline = String.fromCharCode(13, 10);
	 var e = document.getElementById("Apps-filter");
	var txt="totalSizeOfAllApps: " + formatBytes(totalSizeOfAllApps, 2, true)
			+
			newline
	
	txt=txt+e.options[e.selectedIndex].text+" Size: "+ e.options[e.selectedIndex].totalSizeOftheApp
	if(config.Upload_system==4) 
		{
				 txt=txt+newline+  "version: "+AppVersionFilter.options[AppVersionFilter.selectedIndex].text+  "( Size: "+ formatBytes(appversionInfoObj.contentLength) + "  createdOn: "+  appversionInfoObj.createdOn + " )"
	 
			 
		}
		else
		txt=txt+newline+  "version: "+AppVersionFilter.options[AppVersionFilter.selectedIndex].text+  "( Size: "+ formatBytes(appversionInfoObj.size) + "  uploaded: "+  appversionInfoObj.updated + " )"
	 
	 //
	 
	 appVersionInfo.value= txt  //JSON.stringify(appversionInfoObj, null, "\t")
	
}
var getInfoTimer=undefined
function callUrl(url,callbackOnSuccess,callbackOnFailure) 
{
   var xmlHttp = new XMLHttpRequest();
  xmlHttp.successHappend=false
 
  xmlHttp.onreadystatechange = function () 
  {
   
    //console.log("xmlHttp.readyState: "+xmlHttp.readyState);
    //console.log("xmlHttp.status: "+xmlHttp.status);
    //console.log("callUrl()  xmlHttp.responseText: " + xmlHttp.responseText);

    if (
      //xmlHttp.readyState == 4 &&

      xmlHttp.responseText != "" &&
      xmlHttp.responseText != undefined &&
      xmlHttp.status == 200
    ) 
	{
		if(xmlHttp.successHappend)
		{
			  console.log("xmlHttp.successHappend already true . so skipping: ");
			return
		}
		xmlHttp.successHappend=true
      console.log("success");
      clearTimeout(getInfoTimer);
	  if(callbackOnSuccess)
		callbackOnSuccess(xmlHttp.responseText,xmlHttp.status);
    } 
	else
	{
		if(callbackOnFailure)
			callbackOnFailure(xmlHttp.responseText,xmlHttp.status);
		
		
		//e3ds_alert("deleted: "+text22333 + " , version:"+info.version,{timeout: 2000, color: 'red'});
				
		/*  if (getInfoTimer != undefined) 
			  clearTimeout(getInfoTimer);

		  console.log("11111111111111111setTimeout(callUrl, 2000):"+url);
		  getInfoTimer = setTimeout(callUrl,url,callback, 2000);
		  return;*/
    }
	
  };
  xmlHttp.open("GET", url, true); // true for asynchronous

  try 
  {
    xmlHttp.send(null);
  } 
  catch (e) 
  {
    console.log("XXXXXXXXXXXXXXXXXXX callUrl url : "+url);
    console.log(e);
  }
}



function deleteSelectedVerisonOfTheApp() 
{
	
		if(config.Upload_system==4) 
		{
			
	var e = document.getElementById("Apps-filter");
      var app_value = e.options[e.selectedIndex].value;
      var app_text22 = e.options[e.selectedIndex].text;
	  
	  ///api/v1/azure/files/superman/superboy
	   var e2 = document.getElementById("AppVersionFilter");
	 if
	 (
		 (e2.selectedIndex == -1)
		
	 )
		return
	 
	 
	 
	  ///api/v1/azure/files/superman/superboy
	  //https://upload-api.eagle3dstreaming.com/api/v1/files/default/streamingapp/demo/test/2.zip
	  //https://upload-api.eagle3dstreaming.com/api/v1/files/default/streamingapp/demo/test
	 var filename=app_text22
				  +"/"+e2.options[e2.selectedIndex].text
				  +".zip"
	  url=  
				 config.uploader4ApiUrl+"/api/v1/files/"+config.cloudStorageSystem4StreamingApp+"/streamingapp/"
				  +username
				  +"/"
				  
				  +filename
				 console.log("---------url: " + url);
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.isCalled=false
				xmlHttp.onreadystatechange = function () 
				{
					//console.log(xmlHttp.readyState);
					//console.log(xmlHttp.status);
					//console.log("getInfo()  xmlHttp.responseText: " + xmlHttp.responseText);
					//console.log("11111111111111111111111 xmlHttp.responseText.url :    " + xmlHttp.responseText.url);
					
					if(xmlHttp.isCalled)
						return
				
				console.log("---------xmlHttp.status : " + xmlHttp.status);
				
					if (xmlHttp.status == 500)
					{
						e3ds_alert(text22333+ " doesn't exist in our new file storage",{timeout: 2000, color: 'red'});
					}
					
					if (xmlHttp.status == 429) 
					{
						 /* if (getInfoTimer != undefined) 
							  clearTimeout(getInfoTimer);

						console.log("11111111111111111setTimeout(getInfo, 2000)");
						getInfoTimer = setTimeout(getInfo, 2000);
						return;*/
					}
					
					
				if (
				  //xmlHttp.readyState == 4 &&

				  xmlHttp.responseText != "" &&
				  xmlHttp.responseText != undefined &&
				  xmlHttp.status == 200 //422
				) 
				{
				  console.log("success");
				  e3ds_alert("successfuly deleted "+filename,{timeout: 2000, color: 'blue'});
				 

					var dgsgsg = JSON.stringify({
									type: "getAppListOf",
									owner: username,
								   
								  });
					console.log(" ws.send(): " + JSON.stringify(dgsgsg));
					ws.send(dgsgsg);



				 //clearTimeout(getInfoTimer);
				  //callback(xmlHttp);
				} 
				else 
				{
				  //console.error("getInfo Request not successful", xmlHttp.readyState, xmlHttp.status);
				  //console.error("getInfo xmlHttp.responseText: ", xmlHttp.responseText);
				  //if (getInfoTimer != undefined) clearTimeout(getInfoTimer);

				  //console.log("11111111111111111setTimeout(getInfo, 2000)");
				  //getInfoTimer = setTimeout(getInfo, 2000);
				}
			  };
			  
			  xmlHttp.open("DELETE", url, true); // true for asynchronous

			  try 
			  {
				xmlHttp.send(null);
			  } 
			  catch (e) 
			  {
				console.log("XXXXXXXXXXXXXXXXXXX getInfo try catch error : ");
				console.log(e);
			  }
			  
	  
	  
			return
		}
		
	 var e2 = document.getElementById("AppVersionFilter");
	 if
	 (
		 (e2.selectedIndex != -1)
		 &&
		 (e2.options[e2.selectedIndex].text != -1)
	 )
	 {
		 
		 var info = JSON.parse(e2.options[e2.selectedIndex].value);
		console.log(i+": "+ JSON.stringify(info));
				 
				 if
				 (
					 (info.version != undefined)
					 &&
					 (info.version.toString().length >=3)
				 )
				 {
					 var e22 = document.getElementById("Apps-filter");
					  var value333 = e22.options[e22.selectedIndex].value;
					  
						
					  var text22333 = e22.options[e22.selectedIndex].text;
					  
					  var gfdsgdgd = JSON.stringify({
										type: "DeleteGcsAppVersion",
										info: info,
										owner: username,
										app: text22333,
										version: e2.options[e2.selectedIndex].text,
									  });
									  ws.send(gfdsgdgd);
									  console.log(" ws.send(): " + gfdsgdgd);
														  
								/* 					 var url="https://api.eagle3dstreaming.com/v1/storage/gcs/delete?companyName="
													 +username
													 +"&appName="
													 +text22333
													 +"&version="
													 +info.version
												  console.log(`url: `+url);
												  
												  callUrl(url,
												  
												  function(responseText,status) 
												  {
													  
													  e3ds_alert("deleted: "+text22333 + " , version:"+info.version,{timeout: 2000, color: 'red'});
												  
												  
												   var dgsgsg = JSON.stringify({
																	type: "SendAppList",
																	owner: username
																	
																  });

																  console.log(" ws.send(): " + JSON.stringify(dgsgsg));
																  ws.send(dgsgsg);
												  
												  
												  },
												  function(responseText,status) 
												  {
													  
													  e3ds_alert(responseText,{timeout: 2000, color: 'red'});
												  }
												  
										
												  
												  )  */
				  
				  //{"fileToDelete":{"name":"demo/3DViewer/1.zip","generation":1641869752310280,"updated":"2022-01-11T02:56:23.369Z","size":"564096453","gcsEndTime":"16418697","version":101},"deleted":true}
				 
				 
				 
				 }
				 else
				 {
					 e3ds_alert(`Cant be deleted for now`,{timeout: 2000, color: 'red'});
		
				 }
				 
				 
						
	 }
	 	
}

function deleteTheWholeServerApp() 
{
	if(config.Upload_system==4) 
		{
			
	var e = document.getElementById("ServerApps-filter");
      var app_value = e.options[e.selectedIndex].value;
      var app_text22 = e.options[e.selectedIndex].text;
	  
//https://upload-api.eagle3dstreaming.com/api/v1/files/default/dedicatedserver/demo/aaa/2.zip
//https://upload-api.eagle3dstreaming.com/api/v1/files/default/dedicatedserver/demo/aaa
	  url=  
				  config.uploader4ApiUrl+"/api/v1/files/"+config.cloudStorageSystem4StreamingApp+"/dedicatedserver/"
				  +username
				  +"/"
				  +app_text22
		console.log("deleteTheWholeServerApp delete url:"+url);		  
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.isCalled=false
				xmlHttp.onreadystatechange = function () 
				{
					//console.log(xmlHttp.readyState);
					//console.log(xmlHttp.status);
					//console.log("getInfo()  xmlHttp.responseText: " + xmlHttp.responseText);
					//console.log("11111111111111111111111 xmlHttp.responseText.url :    " + xmlHttp.responseText.url);
					
					if(xmlHttp.isCalled)
						return
				
				console.log("---------xmlHttp.status : " + xmlHttp.status);
				
					if (xmlHttp.status == 500)
					{
						e3ds_alert(text22333+ " doesn't exist in our new file storage",{timeout: 2000, color: 'red'});
					}
					
					if (xmlHttp.status == 429) 
					{
						 /* if (getInfoTimer != undefined) 
							  clearTimeout(getInfoTimer);

						console.log("11111111111111111setTimeout(getInfo, 2000)");
						getInfoTimer = setTimeout(getInfo, 2000);
						return;*/
					}
					
					
				if (
				  //xmlHttp.readyState == 4 &&

				  xmlHttp.responseText != "" &&
				  xmlHttp.responseText != undefined &&
				  xmlHttp.status == 200 //422
				) 
				{
				  console.log("success");
				  e3ds_alert("successfuly deleted: "+app_text22,{timeout: 2000, color: 'blue'});
				    var dgsgsg = JSON.stringify({
									type: "getServerAppListOf",
									owner: username,
								   
								  });
					console.log(" ws.send(): " + JSON.stringify(dgsgsg));
					ws.send(dgsgsg);
				  //clearTimeout(getInfoTimer);
				  //callback(xmlHttp);
				} 
				else 
				{
				  //console.error("getInfo Request not successful", xmlHttp.readyState, xmlHttp.status);
				  //console.error("getInfo xmlHttp.responseText: ", xmlHttp.responseText);
				  //if (getInfoTimer != undefined) clearTimeout(getInfoTimer);

				  //console.log("11111111111111111setTimeout(getInfo, 2000)");
				  //getInfoTimer = setTimeout(getInfo, 2000);
				}
			  };
			  
			  xmlHttp.open("DELETE", url, true); // true for asynchronous

			  try 
			  {
				xmlHttp.send(null);
			  } 
			  catch (e) 
			  {
				console.log("XXXXXXXXXXXXXXXXXXX getInfo try catch error : ");
				console.log(e);
			  }
			  
	  
	  
			return
		}
	var x = document.getElementById("AppVersionFilter").options;
	
	
	for ( i=0;i<x.length;i++)
			{
				var info = JSON.parse(x[i].value);
				 console.log(i+": "+ JSON.stringify(info));
				 
				 if(info.source =="oldAwsUploads")
				 {
					  var e22 = document.getElementById("Apps-filter");
					  var value333 = e22.options[e22.selectedIndex].value;
					  var text22333 = e22.options[e22.selectedIndex].text;

					  console.log("Apps text22: " + text22333);
					  console.log("Apps value: " + value333);

					  var gfdsgdgd = JSON.stringify({
						type: "deleteAppFromS3",
						owner: username,
						app: text22333,
					  });

					  console.log(" ws.send(): " + gfdsgdgd);

					  ws.send(gfdsgdgd);
	  
					 break
				 }
			}
			
	for ( i=0;i<x.length;i++)
			{
				var info = JSON.parse(x[i].value);
				 console.log(i+": "+ JSON.stringify(info));
				 
				 if
				 (
					 (info.version != undefined)
					 &&
					 (info.version.toString().length >=3)
				 )
				 {
					  var e22 = document.getElementById("Apps-filter");
					  var value333 = e22.options[e22.selectedIndex].value;
					  var text22333 = e22.options[e22.selectedIndex].text;

					  console.log("Apps text22: " + text22333);
					  console.log("Apps value: " + value333);

					  var gfdsgdgd = JSON.stringify({
						type: "deleteAppFromGcs",
						owner: username,
						app: text22333,
					  });

					  console.log(" ws.send(): " + gfdsgdgd);

					  ws.send(gfdsgdgd);
	  
					 break
				 }
			}		
}



function deleteTheWholeApp() 
{
	if(config.Upload_system==4) 
		{
			
	var e = document.getElementById("Apps-filter");
      var app_value = e.options[e.selectedIndex].value;
      var app_text22 = e.options[e.selectedIndex].text;
	  
	  ///api/v1/azure/files/superman/superboy
	  //https://upload-api.eagle3dstreaming.com/api/v1/files/default/streamingapp/demo/test/2.zip
	  //https://upload-api.eagle3dstreaming.com/api/v1/files/default/streamingapp/demo/test
	  url=  
				  config.uploader4ApiUrl+"/api/v1/files/"+config.cloudStorageSystem4StreamingApp+"/streamingapp/"
				  +username
				  +"/"
				  +app_text22
		console.log("deleteTheWholeApp delete url:"+url);		  
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.isCalled=false
				xmlHttp.onreadystatechange = function () 
				{
					//console.log(xmlHttp.readyState);
					//console.log(xmlHttp.status);
					//console.log("getInfo()  xmlHttp.responseText: " + xmlHttp.responseText);
					//console.log("11111111111111111111111 xmlHttp.responseText.url :    " + xmlHttp.responseText.url);
					
					if(xmlHttp.isCalled)
						return
				
				console.log("---------xmlHttp.status : " + xmlHttp.status);
				
					if (xmlHttp.status == 500)
					{
						e3ds_alert(text22333+ " doesn't exist in our new file storage",{timeout: 2000, color: 'red'});
					}
					
					if (xmlHttp.status == 429) 
					{
						 /* if (getInfoTimer != undefined) 
							  clearTimeout(getInfoTimer);

						console.log("11111111111111111setTimeout(getInfo, 2000)");
						getInfoTimer = setTimeout(getInfo, 2000);
						return;*/
					}
					
					
				if (
				  //xmlHttp.readyState == 4 &&

				  xmlHttp.responseText != "" &&
				  xmlHttp.responseText != undefined &&
				  xmlHttp.status == 200 //422
				) 
				{
				  console.log("success");
				  e3ds_alert("successfuly deleted: "+app_text22,{timeout: 2000, color: 'blue'});
				    var dgsgsg = JSON.stringify({
									type: "getAppListOf",
									owner: username,
								   
								  });
					console.log(" ws.send(): " + JSON.stringify(dgsgsg));
					ws.send(dgsgsg);
				  //clearTimeout(getInfoTimer);
				  //callback(xmlHttp);
				} 
				else 
				{
				  //console.error("getInfo Request not successful", xmlHttp.readyState, xmlHttp.status);
				  //console.error("getInfo xmlHttp.responseText: ", xmlHttp.responseText);
				  //if (getInfoTimer != undefined) clearTimeout(getInfoTimer);

				  //console.log("11111111111111111setTimeout(getInfo, 2000)");
				  //getInfoTimer = setTimeout(getInfo, 2000);
				}
			  };
			  
			  xmlHttp.open("DELETE", url, true); // true for asynchronous

			  try 
			  {
				xmlHttp.send(null);
			  } 
			  catch (e) 
			  {
				console.log("XXXXXXXXXXXXXXXXXXX getInfo try catch error : ");
				console.log(e);
			  }
			  
	  
	  
			return
		}
	var x = document.getElementById("AppVersionFilter").options;
	
	
	for ( i=0;i<x.length;i++)
			{
				var info = JSON.parse(x[i].value);
				 console.log(i+": "+ JSON.stringify(info));
				 
				 if(info.source =="oldAwsUploads")
				 {
					  var e22 = document.getElementById("Apps-filter");
					  var value333 = e22.options[e22.selectedIndex].value;
					  var text22333 = e22.options[e22.selectedIndex].text;

					  console.log("Apps text22: " + text22333);
					  console.log("Apps value: " + value333);

					  var gfdsgdgd = JSON.stringify({
						type: "deleteAppFromS3",
						owner: username,
						app: text22333,
					  });

					  console.log(" ws.send(): " + gfdsgdgd);

					  ws.send(gfdsgdgd);
	  
					 break
				 }
			}
			
	for ( i=0;i<x.length;i++)
			{
				var info = JSON.parse(x[i].value);
				 console.log(i+": "+ JSON.stringify(info));
				 
				 if
				 (
					 (info.version != undefined)
					 &&
					 (info.version.toString().length >=3)
				 )
				 {
					  var e22 = document.getElementById("Apps-filter");
					  var value333 = e22.options[e22.selectedIndex].value;
					  var text22333 = e22.options[e22.selectedIndex].text;

					  console.log("Apps text22: " + text22333);
					  console.log("Apps value: " + value333);

					  var gfdsgdgd = JSON.stringify({
						type: "deleteAppFromGcs",
						owner: username,
						app: text22333,
					  });

					  console.log(" ws.send(): " + gfdsgdgd);

					  ws.send(gfdsgdgd);
	  
					 break
				 }
			}		
}





function OnUserNameSelected() {
	
	 var e = document.getElementById("invitedToUserNames-filter");
		if (e) 
		{
			
			var app_value = e.options[e.selectedIndex].value;
			var app_text22 = e.options[e.selectedIndex].text;
			username=app_value
			
			var dgsgsg = JSON.stringify({
			type: "takeIdentity",
			clientType: "controlpanel",
			isAdmin: isAdmin,
			owner: username,
		  });
document.getElementById("ProgramName_text").innerHTML = username;
			console.log(" ws.send(): " + JSON.stringify(dgsgsg));
			ahsanWsSend(dgsgsg);
    
		}
		
									  
	
}



function onAppChange() {
	
	if(config.Upload_system==4) 
		{
			onAppChangeForUpload_system4();
			return
			 
		}
		
	var e = document.getElementById("Apps-filter");
	
	
	if(e.selectedIndex == -1)
		return
  
  var app_text22 = e.options[e.selectedIndex].text;

  if (app_text22 == undefined || app_text22 == "") 
	  return;
  document.getElementById("GenrateLinks").disabled = false;

  document.getElementById("UploadNewVersion").disabled = false;
  
  if (config.FS_system==2)
  {
	  var AppVersionFilter = document.getElementById("AppVersionFilter");
	  var app= JSON.parse(e.options[e.selectedIndex].value)  
	  AppVersionFilter.innerHTML = "";
	  
		console.log("JSON.stringify(app): " + JSON.stringify(app));  
	  var versions=  app.versions
			var totalSizeOftheApp=0
			for ( i=0;i<versions.length;i++)
			{
				var versioninfo = versions[i];
				if(versioninfo.contentLength != undefined)
					totalSizeOftheApp=totalSizeOftheApp+Number(versioninfo.size)
						
				  var option = document.createElement("option");
				  
				   option.value =JSON.stringify(versioninfo)
				   
				   
				  option.text = versioninfo.version
				  AppVersionFilter.add(option, i);
				  
			} 
			//onAppversionChange()
			AppVersionFilter.selectedIndex = -1
			
			
			e.options[e.selectedIndex].totalSizeOftheApp=formatBytes(totalSizeOftheApp)
			console.log(app.name+ " size: " + e.options[e.selectedIndex].totalSizeOftheApp);  
var newline = String.fromCharCode(13, 10);
	 var appVersionInfo = document.getElementById("appVersionInfo");
	 appVersionInfo.value= 
	 
	 "totalSizeOfAllApps: " + formatBytes(totalSizeOfAllApps, 2, true)
			+
			newline
	 +
	 app.name + " Size: "+ e.options[e.selectedIndex].totalSizeOftheApp
  }
}


function onAppChangeForUpload_system4() {
	
	var e = document.getElementById("Apps-filter");
	
	
	if(e.selectedIndex == -1)
		return
  
  var app_text22 = e.options[e.selectedIndex].text;

  if (app_text22 == undefined || app_text22 == "") 
	  return;
  document.getElementById("GenrateLinks").disabled = false;

  document.getElementById("UploadNewVersion").disabled = false;
  
  if (config.FS_system==2)
  {
	  var AppVersionFilter = document.getElementById("AppVersionFilter");
	  var app= JSON.parse(e.options[e.selectedIndex].value)  
	  AppVersionFilter.innerHTML = "";
	  
		console.log("JSON.stringify(app): " + JSON.stringify(app));  
	  var versions=  app.files
			var totalSizeOftheApp=0
			for ( i=0;i<versions.length;i++)
			{
				var versioninfo = versions[i];
				if(versioninfo.contentLength != undefined)
					totalSizeOftheApp=totalSizeOftheApp+Number(versioninfo.contentLength)
						
				  var option = document.createElement("option");
				  
				   option.value =JSON.stringify(versioninfo)
				   
				   
				  var fsfst = versioninfo.filename.split("/")[2]
				  var sfsfsfs = fsfst.split(".")[0]
				  option.text = sfsfsfs
				  AppVersionFilter.add(option, i);
				  
			} 
			//onAppversionChange()
			AppVersionFilter.selectedIndex = -1
			
			
			e.options[e.selectedIndex].totalSizeOftheApp=formatBytes(totalSizeOftheApp)
			console.log(app.name+ " size: " + e.options[e.selectedIndex].totalSizeOftheApp);  
var newline = String.fromCharCode(13, 10);
	 var appVersionInfo = document.getElementById("appVersionInfo");
	 appVersionInfo.value= 
	 
	 "totalSizeOfAllApps: " + formatBytes(totalSizeOfAllApps, 2, true)
			+
			newline
	 +
	 app.name + " Size: "+ e.options[e.selectedIndex].totalSizeOftheApp
  }
}


function setResValues(v1,v2)
{
	
					
					   document.getElementById("ResulationX_ue4").value=v1
					   document.getElementById("ResulationY_ue4").value=v2
					   document.getElementById("ResulationX_ue4").disabled=true
						document.getElementById("ResulationY_ue4").disabled=true
}

function setResulationUI()
{	
				 var e2 = document.getElementById("resolutionFilter");
				 if(e2.selectedIndex==-1)
						return
					
			  var resolutionFilterl_value = e2.options[e2.selectedIndex].value;
			  var resolutionFilterl_text22 = e2.options[e2.selectedIndex].text;
			  
			 
				   switch (resolutionFilterl_text22) 
				  {
					case "Max":
					  setResValues("","")
					  break;
					  
					 case "1080p":
					   
					    setResValues("1920","1080")
					  break;
					  
					  case "720p":
					   
					   setResValues("1280","720")
					  break;
					  
					  case "Custom":
						document.getElementById("ResulationX_ue4").disabled=false
						document.getElementById("ResulationY_ue4").disabled=false
						
						    
							
						if(
							(currentSelectedConfigObj.ResulationX_ue4 != "")
							&&
							(currentSelectedConfigObj.ResulationX_ue4 != undefined)
						)
						{
							
							
							
						}
						else
						{
							e3ds_alert("Faulty value in ResulationX in config: "+currentSelectedConfigObj+"  Plz fix and save it " ,{ color: 'Red'});
						}
						
						 if(
							(currentSelectedConfigObj.ResulationY_ue4 != "")
							&&
							(currentSelectedConfigObj.ResulationY_ue4 != undefined)
						)
						{
							
							
						}
						else
						{
							
							e3ds_alert("Faulty value in ResulationY in config: "+currentSelectedConfigObj+"  Plz fix and save it " ,{ color: 'Red'});
					
						}
						
						document.getElementById("ResulationX_ue4").value=currentSelectedConfigObj.ResulationX_ue4
						document.getElementById("ResulationY_ue4").value=currentSelectedConfigObj.ResulationY_ue4
						
						
							
			  
					  break;
					  
						default:
				  console.log(
					`ERROR: Unknown resolutionFilterl_text22 scheme ${resolutionFilterl_text22}`
				  );
				  
				  break;
					  
				  }
}

function doConfigLoadingFromApp_filter1()
{
	var e = document.getElementById("AppConfig-filter");
	if(e.selectedIndex ==-1)
		return
	var ConfigName_value = e.options[e.selectedIndex].value;
	var configName = e.options[e.selectedIndex].text;
		 
	  
	doConfigLoading(e.selectedIndex,configName,ConfigName_value)
}

function doConfigLoading(selectedIndex,configName,ConfigName_value)
{
	
	SelectedAppConfigIndex=selectedIndex
    currentSelectedConfig=configName
	document.getElementById("config-name-label").innerHTML = currentSelectedConfig;
	
	
    let AppConfigfilter = document.getElementById("AppConfig-filter");
	if (AppConfigfilter !== null) 
		AppConfigfilter.selectedIndex=SelectedAppConfigIndex
	
	let AppConfigfilter2 = document.getElementById("AppConfig-filter2");
	if (AppConfigfilter2 !== null) 
		AppConfigfilter2.selectedIndex=SelectedAppConfigIndex
	

      loadSelectedAppConfig(ConfigName_value)
	  
}


function setupHtmlEvents() {
  //Window events
  window.addEventListener("resize", resizePlayerStyle, true);

  //HTML elements controls
  let resizeCheckBox = document.getElementById(
    "enlarge-display-to-fill-window-tgl"
  );
  if (resizeCheckBox !== null) {
    resizeCheckBox.onchange = function (event) {
      resizePlayerStyle();
    };
  }
  
  let resolutionFilterl = document.getElementById("resolutionFilter");
  if (resolutionFilterl !== null) {
    resolutionFilterl.onchange = function (event) {
		

		setResulationUI()
     
	  
	  
    };
  }
  
  let subscriptionPackagesfilter = document.getElementById("subscriptionPackages-filter");
  if (subscriptionPackagesfilter !== null) {
    subscriptionPackagesfilter.onchange = function (event) {
		

		onsubscriptionPackagesfilterChnage()
     
	  
	  
    };
  }

let RunningDedicatedServerMachinesfilter = document.getElementById("RunningDedicatedServerMachines-filter");
  if (RunningDedicatedServerMachinesfilter !== null) {
    RunningDedicatedServerMachinesfilter.onchange = function (event) {
		

		OnDSMachineSelected()
     
	  
	  
    };
  }


let VideoAssetsfilter = document.getElementById("VideoAssets-filter");
  if (VideoAssetsfilter !== null) {
    VideoAssetsfilter.onchange = function (event) {
      onVideoAssetsChange();
    };
  }


  qualityControlOwnershipCheckBox = document.getElementById(
    "quality-control-ownership-tgl"
  );
  if (qualityControlOwnershipCheckBox !== null) {
    qualityControlOwnershipCheckBox.onchange = function (event) {
      requestQualityControl();
    };
  }
  
  
    let AppConfigfilter = document.getElementById("AppConfig-filter");
  

  if (AppConfigfilter !== null) 
  {
    AppConfigfilter.onchange = function (event) 
	{
		doConfigLoadingFromApp_filter1()
		
     
    };
  }
  
 let AppConfigfilter2 = document.getElementById("AppConfig-filter2");
  

  if (AppConfigfilter2 !== null) 
  {
    AppConfigfilter2.onchange = function (event) 
	{

		var e = AppConfigfilter2
		  var ConfigName_value = e.options[e.selectedIndex].value;
		  var configName = e.options[e.selectedIndex].text;
		 
		 var Appsfilter = document.getElementById("AppConfig-filter");
		 Appsfilter.selectedIndex=e.selectedIndex
	  doConfigLoadingFromApp_filter1()
		
     
    };
  }
  

  let invitedToUserNamesfilter = document.getElementById("invitedToUserNames-filter");
  if (invitedToUserNamesfilter !== null) 
  {
    invitedToUserNamesfilter.onchange = function (event) 
	{
      OnUserNameSelected()
     
    };
  }
  
  
  let Appsfilter = document.getElementById("Apps-filter");
  if (Appsfilter !== null) 
  {
    Appsfilter.onchange = function (event) 
	{
      onAppChange()
     
    };
  }
  
  let AppVersionFilter = document.getElementById("AppVersionFilter");
  if (AppVersionFilter !== null) 
  {
    AppVersionFilter.onchange = function (event) 
	{
      onAppversionChange()
     
    };
  }

  let prioritiseQualityCheckbox = document.getElementById(
    "prioritise-quality-tgl"
  );
  let qualityParamsSubmit = document.getElementById("quality-params-submit");

  if (prioritiseQualityCheckbox !== null) {
    prioritiseQualityCheckbox.onchange = function (event) {
      if (prioritiseQualityCheckbox.checked) {
        // TODO: This state should be read from the UE Application rather than from the initial values in the HTML
        let lowBitrate = document.getElementById("low-bitrate-text").value;
        let highBitrate = document.getElementById("high-bitrate-text").value;
        let minFPS = document.getElementById("min-fps-text").value;

        let initialDescriptor = {
          PrioritiseQuality: 1,
          LowBitrate: lowBitrate,
          HighBitrate: highBitrate,
          MinFPS: minFPS,
        };
        // TODO: The descriptor should be sent as is to a generic handler on the UE side
        // but for now we're just sending it as separate console commands
        //emitUIInteraction(initialDescriptor);
        sendQualityConsoleCommands(initialDescriptor);
        console.log(initialDescriptor);
		
		
		

		

        qualityParamsSubmit.onclick = function (event) {
          let lowBitrate = document.getElementById("low-bitrate-text").value;
          let highBitrate = document.getElementById("high-bitrate-text").value;
          let minFPS = document.getElementById("min-fps-text").value;
          let descriptor = {
            PrioritiseQuality: 1,
            LowBitrate: lowBitrate,
            HighBitrate: highBitrate,
            MinFPS: minFPS,
          };
          //emitUIInteraction(descriptor);
          sendQualityConsoleCommands(descriptor);
          console.log(descriptor);
        };
      } else {
        // Prioritise Quality unchecked
        let initialDescriptor = {
          PrioritiseQuality: 0,
        };
        //emitUIInteraction(initialDescriptor);
        sendQualityConsoleCommands(initialDescriptor);
        console.log(initialDescriptor);

        qualityParamsSubmit.onclick = null;
      }
    };
  }
  
   const EditSelectedConfig = document.getElementById("EditSelectedConfig");
		EditSelectedConfig.onclick = function() 
		{
	
				  var e = document.getElementById("AppConfig-filter");
				  if(e.selectedIndex== -1)
				 {
					e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
						
					return
				 }	
				 
				const modal = document.getElementById("myModal");
				modal.style.display = "block";
				
				
				doConfigLoadingFromApp_filter1()
				
     
			} 
			
     const EditConfig4Automation = document.getElementById("EditConfig4Automation");
		EditConfig4Automation.onclick = function() 
		{
	
				
				 
				const modal = document.getElementById("model4AutomationConfig");
				modal.style.display = "block";
				
				
				
				
     
			} 
			
  
  const MonitoringBtn = document.getElementById("MonitoringBtn");
		MonitoringBtn.onclick = function() {
	//https://connector_moh.eaglepixelstreaming.com/API/XXXXX/monitoring
	
	
        var url111 = mmlinkerUrl+"API/"+username+"/monitoring";
		 console.log("---------url111 : " + url111);
		window.open(url111, "_blank");
     
			} 

 var RunningDedicatedServerMachines_filter = document.getElementById("RunningDedicatedServerMachines-filter");
		RunningDedicatedServerMachines_filter.onselectionchange   = function() {
	
				OnDSMachineSelected()
			} 




  let showFPSButton = document.getElementById("show-fps-button");
  if (showFPSButton !== null) {
    showFPSButton.onclick = function (event) {
      let consoleDescriptor = {
        Console: "stat fps",
      };
      emitUIInteraction(consoleDescriptor);
    };
  }

  let matchViewportResolutionCheckBox = document.getElementById(
    "match-viewport-res-tgl"
  );
  if (matchViewportResolutionCheckBox !== null) {
    matchViewportResolutionCheckBox.onchange = function (event) {
      matchViewportResolution = matchViewportResolutionCheckBox.checked;
    };
  }

  let statsCheckBox = document.getElementById("show-stats-tgl");
  if (statsCheckBox !== null) {
    statsCheckBox.onchange = function (event) {
      let stats = document.getElementById("statsContainer");
      stats.style.display = event.target.checked ? "block" : "none";
    };
  }

  var ApplyBtn4AllocateNewInstances = document.getElementById(
    "ApplyBtn4AllocateNewInstances"
  );
  if (ApplyBtn4AllocateNewInstances) {
    ApplyBtn4AllocateNewInstances.onclick = function (event) {
      console.log(`-> SS: ApplyBtn4AllocateNewInstances`);

      var e = document.getElementById("InstanceType-filter");
      var value = e.options[e.selectedIndex].value;
      var text22 = e.options[e.selectedIndex].text;

      console.log("InstanceType text22: " + text22);
      console.log("InstanceType value: " + value);

      var e22 = document.getElementById("Region-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Region text22: " + text22333);
      console.log("Region value: " + value333);

      var e = document.getElementById("num-new-vm");
      var value232424 = e.value;

      console.log("num-new-vm value: " + value232424);

      var e22222 = document.getElementById("num-user-InNEwMachine");
      var appCount = e22222.value;

      var gfdsgdgd = JSON.stringify({
        type: "ApplyBtn4AllocateNewInstances",
        count: value232424,
        owner: username,
        instanceType: value,
        region: value333,
        appCount: appCount,
        OnDemandMachine: document.getElementById("OnDemandMachine").checked,
      });

      console.log(" 11111111111111 ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }

  var dateSubmit = document.getElementById("dateSubmit");
  if (dateSubmit) {
    dateSubmit.onclick = function (event) {
      console.log(`-> SS: dateSubmit`);

      var StartDate = document.getElementById("StartDate");
      var StartDatevalue = StartDate.value;

      var EndDate = document.getElementById("EndDate");
      var EndDatevalue = EndDate.value;

      console.log("StartDatevalue text22: " + StartDatevalue);
      console.log("EndDatevalue value: " + EndDatevalue);
      var count = document.getElementById("num-vm2-spawn");
      var countvalue = count.value;

      var e = document.getElementById("Schduler_InstanceType-filter");
      var value = e.options[e.selectedIndex].value;
      var text22 = e.options[e.selectedIndex].text;

      var e22 = document.getElementById("Schduler_Region-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Region text22: " + text22333);
      console.log("Region value: " + value333);
      //2do-check if EndDate is behaind of startdate or not

      var gfdsgdgd = JSON.stringify({
        type: "dateSubmit",
        StartDate: new Date(StartDatevalue).toString(),
        StartDateOrginal: StartDatevalue,

        EndDate: EndDatevalue,
        EndDateOrginal: EndDatevalue,
        instanceType: value,
        region: value333,
        count: countvalue,
        owner: username,
      });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }

  var UploadNewVersion = document.getElementById("UploadNewVersion");
  if (UploadNewVersion) {
    UploadNewVersion.onclick = function (event) {
      console.log(`-> SS: UploadNewVersion`);

      var e22 = document.getElementById("Apps-filter");
	  
	   if(e22.selectedIndex ==-1)
	  {
		   e3ds_alert("select an valid app to update",{timeout: 2000, color: 'red'});
		
		  return
	  }
	  
	  
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

		if(value333 =="")
	  {
		   e3ds_alert("select an valid app to update",{timeout: 2000, color: 'red'});
		
		  return
	  }


      var url111 = fileServerUrl;
	  
	  if((Upload_system==0) ||(Upload_system==4))
		 url111 = url111+config.cloudStorageSystem4StreamingApp+"/streamingapp"+ "/" + username + "/" + text22333 //+ "/upload/";
	   else  
        url111 =uploaderDomain + username + "/" + text22333 
	

      
	  
	  

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }  
  
  
  var DownloadSelectedApp = document.getElementById("DownloadSelectedApp");
  if (DownloadSelectedApp) {
    DownloadSelectedApp.onclick = function (event) {
      console.log(`-> SS: DownloadSelectedApp`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
//http://localhost:2085/v1/storage/gcs/download?companyName=RedLeaf&appName=tester02&version=100
	var url=  
				  "https://api.eagle3dstreaming.com/v1/storage/"+config.cloudStorageSystem4StreamingApp+"/"+"download?companyName="
				  +username
				  +"&appName="
				  +text22333
				  //+"&region="
				  //+GcsRegion.regionCode
				 // +"&direct="+false
				 //+"&flexible="+true 
				 +"&version=-1" 
		
//https://uploader4-api.eaglepixelstreaming.com/api/v1/files/gcs/demo/3DViewer/download/1
//https://uploader4-api.eaglepixelstreaming.com/api/v1/files/gcs/demo/3DViewer/download/latest
// https://upload-api.eagle3dstreaming.com/api/v1/files/default/streamingapp/demo/3DViewer/download/latest
 url=  
				  config.uploader4ApiUrl+"/api/v1/files/"+config.cloudStorageSystem4StreamingApp+"/streamingapp/"
				  +username
				  +"/"
				  +text22333
				  //+"&region="
				  //+GcsRegion.regionCode
				 // +"&direct="+false
				 //+"&flexible="+true 
				 +"/download/"
				 
		var AppVersionFilter = document.getElementById("AppVersionFilter");
	
	if(AppVersionFilter.selectedIndex == -1)
				  url=  url+"latest"
			  else
				 url=  url+AppVersionFilter.options[AppVersionFilter.selectedIndex].text
			 
      console.log("---------url111 : " + url);
  
	  
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.isCalled=false
		xmlHttp.onreadystatechange = function () 
		{
			//console.log(xmlHttp.readyState);
			//console.log(xmlHttp.status);
			//console.log("getInfo()  xmlHttp.responseText: " + xmlHttp.responseText);
			//console.log("11111111111111111111111 xmlHttp.responseText.url :    " + xmlHttp.responseText.url);
			
			if(xmlHttp.isCalled)
				return
		
		console.log("---------xmlHttp.status : " + xmlHttp.status);
		
			if (xmlHttp.status == 500)
			{
				e3ds_alert(text22333+ " doesn't exist in our new file storage",{timeout: 2000, color: 'red'});
			}
			
			if (xmlHttp.status == 429) 
			{
				 /* if (getInfoTimer != undefined) 
					  clearTimeout(getInfoTimer);

				console.log("11111111111111111setTimeout(getInfo, 2000)");
				getInfoTimer = setTimeout(getInfo, 2000);
				return;*/
			}
			
			
		if (
		  //xmlHttp.readyState == 4 &&

		  xmlHttp.responseText != "" &&
		  xmlHttp.responseText != undefined &&
		  xmlHttp.status == 200 //422
		) 
		{
		  //console.log("success");
		  //clearTimeout(getInfoTimer);
		  callback(xmlHttp);
		} 
		else 
		{
		  //console.error("getInfo Request not successful", xmlHttp.readyState, xmlHttp.status);
		  //console.error("getInfo xmlHttp.responseText: ", xmlHttp.responseText);
		  //if (getInfoTimer != undefined) clearTimeout(getInfoTimer);

		  //console.log("11111111111111111setTimeout(getInfo, 2000)");
		  //getInfoTimer = setTimeout(getInfo, 2000);
		}
	  };
	  
	  xmlHttp.open("GET", url, true); // true for asynchronous

	  try 
	  {
		xmlHttp.send(null);
	  } 
	  catch (e) 
	  {
		console.log("XXXXXXXXXXXXXXXXXXX getInfo try catch error : ");
		console.log(e);
	  }
	  
	  
      //window.open(url, "_blank");
    };
  }
  
    var UploadNewVersionServer = document.getElementById("UploadNewVersionServer");
  if (UploadNewVersionServer) {
    UploadNewVersionServer.onclick = function (event) {
      console.log(`-> SS: UploadNewVersionServer`);

      var e22 = document.getElementById("ServerApps-filter");
	  if(e22.selectedIndex ==-1)
	  {
		   e3ds_alert("select an valid app to update",{timeout: 2000, color: 'red'});
		
		  return
	  }
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

		if(value333 =="")
	  {
		   e3ds_alert("select an valid app to update",{timeout: 2000, color: 'red'});
		
		  return
	  }


      console.log("ServerApps text22: " + text22333);
      console.log("ServerApps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      var url111 = fileServerUrl;
//https://tawsif-upload.eaglepixelstreaming.com/dedicatedserver/anindasadman/unrecord
//https://tawsif-upload.eaglepixelstreaming.com/s3/dedicatedserver/anindasadman/new_ds
	if(Upload_system==4)
		 url111 = url111+config.cloudStorageSystem4DedicatedServerApp+"/dedicatedserver"+ "/" + username + "/" + text22333 //+ "/upload/";
	
	
	   else  
        url111 = url111 + username + "/" + text22333 + "/server/upload/";
	  
	  //if(Upload_system==1)//http://upload.eagle3dstreaming.com/demo/AAA
        //url111 = "http://upload.eagle3dstreaming.com/" + username + "/" + text22333 
	  
	  

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }
  
  
  var StartServerApp = document.getElementById("StartServerApp");
  if (StartServerApp) {
    StartServerApp.onclick = function (event) {
      console.log(`-> SS: StartServerApp`);

      var e22 = document.getElementById("ServerApps-filter");
	  
	   if(e22.selectedIndex== -1)
	 {
		e3ds_alert(`first select an app`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	  
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;
	  
	   if(value333=="")
	 {
		e3ds_alert(`first select a app`,{timeout: 2000, color: 'red'});
			
		return
	 }	

      console.log("ServerApps text22: " + text22333);
      console.log("ServerApps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/
	  
	  var e = document.getElementById("RunningDedicatedServerMachines-filter");
	  var value22 =undefined
	  if(e.selectedIndex !=-1)
	  {
       value22 = JSON.parse(e.options[e.selectedIndex].value).socketid;
   
      var text22 = e.options[e.selectedIndex].text;
	   console.log("ServerApps value22: " + value22);
      console.log("ServerApps text22: " + text22);
	  }
	  
		var gfdsgdgd = JSON.stringify({
			type: "StartServerApp",
			owner: username,
			appName:text22333,
			version: -1,
			CmdLineParameters4DS:  document.getElementById("CmdLineParameters4DS").value,
			MachineID: value22,
		  });

		  console.log(" ws.send(): " + gfdsgdgd);

		  ws.send(gfdsgdgd);
    
    };
  }
  
  
  var StopServerApp = document.getElementById("StopServerApp");
  if (StopServerApp) {
    StopServerApp.onclick = function (event) {
      console.log(`-> SS: StopServerApp`);

      var e22 = document.getElementById("RunningAppsOnSelctedDSMachine-filter");
      var appInfo = JSON.parse(e22.options[e22.selectedIndex].value);
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("StopServerApp text22: " + text22333);
      console.log("StopServerApp value: " + appInfo);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/
	  
	  var e = document.getElementById("RunningDedicatedServerMachines-filter");
	   if(e22.selectedIndex== -1)
	 {
		e3ds_alert(`first select an app`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	  
	  
      var value22 = JSON.parse(e.options[e.selectedIndex].value);
      var MachineID = value22.socketid;
      var elInfo = value22.elInfo;
      var text22 = e.options[e.selectedIndex].text;
	   console.log("ServerApps value22: " + value22);
      console.log("ServerApps text22: " + text22);
	  
	    if(value22=="")
	 {
		e3ds_alert(`first select a app`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	  
		var gfdsgdgd = JSON.stringify({
			type: "StopServerAppByIpAndPort",
			owner: username,
			appInfo:appInfo,
			elInfo: elInfo,
			appName:text22333,
			version: -1,

			MachineID: MachineID,
		  });

		  console.log(" ws.send(): " + gfdsgdgd);

		  ws.send(gfdsgdgd);
    
    };
  }

  var UploadLogo = document.getElementById("UploadLogo");
  if (UploadLogo) {
    UploadLogo.onclick = function (event) {
      console.log(`-> SS: UploadLogo`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 =
        "https://connector.eagle3dstreaming.com:1990/" +
        username +
        "/" +
        text22333 +
        "/logo/upload/";

      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/logo/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }


 var UploadAssets2D = document.getElementById("UploadAssets2D");
  if (UploadAssets2D) {
    UploadAssets2D.onclick = function (event) {
      console.log(`-> SS: UploadAssets2D`);

     
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
	  //https://ms7.eaglepixelstreaming.com:1990/demo/uploadAssets2D/
	  url111 = "https://" + config.FS_DomainName +"."+config.topLevelDomainName + ":" +config.FS_httpsPort + "/";
      
	 // if(Upload_system==4)
		// url111 = url111+"asset2d"+ "/" + username + "/" + text22333 //+ "/upload/";
	   //else
	  url111 = url111 + username  + "/uploadAssets2D/";
  
/*   https://upload-api.eagle3dstreaming.com/api/v1/files/default/asset2d/anindasadman
https://upload-api.eagle3dstreaming.com/api/v1/files/default/assetvideo/anindasadman

https://upload.eagle3dstreaming.com/s3/asset2d/anindasadman
https://upload.eagle3dstreaming.com/s3/assetvideo/anindasadman

 */
			   
			 url111 = fileServerUrl + 
			// "s3/asset2d/"
			 "asset2d/"
			 
			 + username  
			
      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }
  
   var UploadVideoAssets = document.getElementById("UploadVideoAssets");
  if (UploadVideoAssets) {
    UploadVideoAssets.onclick = function (event) {
      console.log(`-> SS: UploadVideoAssets`);

     
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
	   url111 = "https://" + config.FS_DomainName +"."+config.topLevelDomainName + ":" +config.FS_httpsPort + "/";
	  
	  //https://ms7.eaglepixelstreaming.com:1990/demo/UploadVideoAssets/
	  
	 
//https://tawsif-upload.eaglepixelstreaming.com/asset2d/anindasadman/unrecord
	//if(Upload_system==4)
	//	 url111 = url111+"asset2d"+ "/" + username + "/" + text22333 //+ "/upload/";
	//   else
      url111 = url111 + username  + "/UploadVideoAssets/";
  
  url111 = fileServerUrl +
  //"s3/assetvideo/"
  "assetvideo/"
  
  + username  

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }
  
  
  
   var Assign2TitleBarIcon = document.getElementById("Assign2TitleBarIcon");
  if (Assign2TitleBarIcon) 
  {
    Assign2TitleBarIcon.onclick = function (event) 
	{
		var dsfsf=document.getElementById("preview_TitleBarIcon")
		console.log("---------dsfsf : " + dsfsf);
		//console.log("---------selectedAsset2d : " + window.selectedAsset2d);
		if(dsfsf)
		dsfsf.setAttribute('src', window.selectedAsset2d) 
	 
    };
  }
  
  
    
   var Assign2BGI = document.getElementById("Assign2BGI");
  if (Assign2BGI) 
  {
    Assign2BGI.onclick = function (event) 
	{

		document.getElementById("preview_BGI").setAttribute('src', window.selectedAsset2d) 
	 
    };
  }
  
  
  
     var Assign2Logo = document.getElementById("Assign2Logo");
  if (Assign2Logo) 
  {
    Assign2Logo.onclick = function (event) 
	{

		document.getElementById("preview_Logo").setAttribute('src', window.selectedAsset2d) 
	 
    };
  }
  
     var Assign2PlayBtn = document.getElementById("Assign2PlayBtn");
  if (Assign2PlayBtn) 
  {
    Assign2PlayBtn.onclick = function (event) 
	{

		document.getElementById("preview_PlayBtn").setAttribute('src', window.selectedAsset2d) 
	 
    };
  }
     
	 
	 var Assign2VideoURLBtn = document.getElementById("Assign2VideoURLBtn");
  if (Assign2VideoURLBtn) 
  {
    Assign2VideoURLBtn.onclick = function (event) 
	{
		onVideoAssetsChange()
	 
    };
  }
  
     var Assign2LoadingImg = document.getElementById("Assign2LoadingImg");
  if (Assign2LoadingImg) 
  {
    Assign2LoadingImg.onclick = function (event) 
	{

		document.getElementById("preview_LoadingImg").setAttribute('src', window.selectedAsset2d) 
	 
    };
  }
  
  
       var Assign2BGI4Queue = document.getElementById("Assign2BGI4Queue");
  if (Assign2BGI4Queue) 
  {
    Assign2BGI4Queue.onclick = function (event) 
	{

		document.getElementById("preview_BGI4Queue").setAttribute('src', window.selectedAsset2d) 
	 
    };
  }
         var refreshAssets2DList = document.getElementById("refreshAssets2DList");
  if (refreshAssets2DList) 
  {
    refreshAssets2DList.onclick = function (event) 
	{

			var gfdsgdgd = JSON.stringify({
				type: "sendAll2dAssetsUrls",
				
				 owner: username,
				
				
			  });
			  ws.send(gfdsgdgd);
			  console.log(" ws.send(): " + gfdsgdgd);   
		
	 
    };
  }
  
  
           var refreshVideoAssetsList = document.getElementById("refreshVideoAssetsList");
  if (refreshVideoAssetsList) 
  {
    refreshVideoAssetsList.onclick = function (event) 
	{

			var gfdsgdgd = JSON.stringify({
				type: "sendAllVideoAssetsUrls",
				
				 owner: username,
				
				
			  });
			  ws.send(gfdsgdgd);
			  console.log(" ws.send(): " + gfdsgdgd);   
		
	 
    };
  }

  
   var UploadTitleBarIcon = document.getElementById("UploadTitleBarIcon");
  if (UploadTitleBarIcon) {
    UploadTitleBarIcon.onclick = function (event) {
      console.log(`-> SS: UploadTitleBarIcon`);
	  


      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/TitleBarIcon/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }
  
 /*  firebase.auth().onAuthStateChanged((user) => 
  {
   if (user) {
        let uid = user.uid;
       // document.getElementById("user-email").innerHTML = user.email;
    }
 }); */
  
  
  var UploadBGI = document.getElementById("UploadBGI");
  if (UploadBGI) {
    UploadBGI.onclick = function (event) {
      console.log(`-> SS: UploadBGI`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/bgi/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var UploadBGI4Queue = document.getElementById("UploadBGI4Queue");
  if (UploadBGI4Queue) {
    UploadBGI4Queue.onclick = function (event) {
      console.log(`-> SS: UploadBGI4Queue`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/bgi4Queue/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var UploadBGI = document.getElementById("UploadBGI");
  if (UploadBGI) {
    UploadBGI.onclick = function (event) {
      console.log(`-> SS: UploadBGI`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/bgi/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var UploadPlayBtn = document.getElementById("UploadPlayBtn");
  if (UploadPlayBtn) {
    UploadPlayBtn.onclick = function (event) {
      console.log(`-> SS: UploadPlayBtn`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/playBtnImg/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var UploadLoadingImg = document.getElementById("UploadLoadingImg");
  if (UploadLoadingImg) {
    UploadLoadingImg.onclick = function (event) {
      console.log(`-> SS: UploadLoadingImg`);

      var e22 = document.getElementById("Apps-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Apps text22: " + text22333);
      console.log("Apps value: " + value333);
      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      //https://connector.eagle3dstreaming.com:1990/demo/aaaa/logo/upload/
      var url111 = fileServerUrl;
      url111 = url111 + username + "/" + text22333 + "/LoadingImg/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var deleteAppBtn = document.getElementById("DeleteSelectedApp");
  if (deleteAppBtn) 
  {
    deleteAppBtn.onclick = function (event) 
	{
			  console.log(`-> SS: deleteAppBtn`);
			  
			  var e = document.getElementById("Apps-filter");
					
					  if(e.selectedIndex== -1)
						 {
							e3ds_alert(`first select an App`,{timeout: 2000, color: 'red'});
								
							return
						 }	
						 
						 
			    var app_value = e.options[e.selectedIndex].value;
					  var app_text22 = e.options[e.selectedIndex].text;
					  
			 var e2 = document.getElementById("AppVersionFilter");
			 if
			 (
				 (e2.selectedIndex != -1)
				 &&
				 (e2.options[e2.selectedIndex].text != -1)
			 )
			 {
				 var sfsfs=e2.options[e2.selectedIndex].text
				  let result = confirm("Do you want to proceed to delete app : "+app_text22+" version: "+sfsfs+" ?");

				if (result == true) 
				{
					
					deleteSelectedVerisonOfTheApp() 
				
				}
			 }
			 else
			 {
					
					
			  
				 let result = confirm("Do you want to proceed to delete app : "+app_text22+" ?");

				if (result == true) 
				{
					let result2 = confirm("You agree not to upload any other app under the name "+ app_text22+" ?");

					if (result2 == true) 
					{
					  // user clicked OK
					  //alert("You clicked OK!");
					  deleteTheWholeApp() 
					}
					else 
					{
					  // user clicked Cancel
					  //alert("You clicked Cancel.");
					}
			
					
				}
				
			 }
			  
			  

     
    };
  }
  
  
  var DeleteSelectedServerApp = document.getElementById("DeleteSelectedServerApp");
  if (DeleteSelectedServerApp) 
  {
    DeleteSelectedServerApp.onclick = function (event) 
	{
			  console.log(`-> SS: DeleteSelectedServerApp`);
			  
			  var e = document.getElementById("ServerApps-filter");
					
					  if(e.selectedIndex== -1)
						 {
							e3ds_alert(`first select an Server App`,{timeout: 2000, color: 'red'});
								
							return
						 }	
						 
						 
			    var app_value = e.options[e.selectedIndex].value;
					  var app_text22 = e.options[e.selectedIndex].text;
					  

				
					
			  
				 let result = confirm("Do you want to proceed to delete server app : "+app_text22+" ?");

				if (result == true) 
				{
					let result2 = confirm("You agree that you will not uplaod another app with the  name : "+app_text22+" ?");

					if (result2 == true) 
					{
					  // user clicked OK
					  //alert("You clicked OK!");
					 deleteTheWholeServerApp() 
					}
					else 
					{
					  // user clicked Cancel
					  //alert("You clicked Cancel.");
					}
			
					
				}
				
			
    };
  }

  var UploadNewApp = document.getElementById("UploadNewApp");
  if (UploadNewApp) {
    UploadNewApp.onclick = function (event) {
      console.log(`-> SS: UploadNewApp`);

      var e22 = document.getElementById("newAppName");
      var text22333 = e22.value;

      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      var url111 = fileServerUrl + username + "/" + text22333 + "/upload/";
	  
	  if(Upload_system==1)
		 url111 = uploaderDomain + username + "/" + text22333 
 
 
      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }
  
  
  
  var ok4addNewAppANameInList = document.getElementById("ok4addNewAppANameInList");
  if (ok4addNewAppANameInList) {
    ok4addNewAppANameInList.onclick = function (event) {
      console.log(`-> SS: ok4addNewAppANameInList`);

      var Appsfilter = document.getElementById("Apps-filter");
      if (Appsfilter) {
        var e22 = document.getElementById("addNewAppANameInList");
        var text22333 = e22.value;

        if (text22333 == "") {
          e3ds_alert(`Type an app name `, { timeout: 2000, color: "red" });
          return;
        } 
		else if (doContainRestrictedCharacters(text22333))
		{
          e3ds_alert(`App name can't contain special characters `, { timeout: 2000, color: "red" });
          return;
        } else if(text22333.indexOf)

	

	var url111 = fileServerUrl;
	  
	 /*  if(Upload_system==4)
	  {
		    url111 =url111 + username + "/" + text22333 
	  }
	  else if(Upload_system==0)
		 url111 = url111 + username + "/" + text22333 + "/upload/";
	
	else  
        url111 =uploaderDomain + username + "/" + text22333  */
	
	  if((Upload_system==0) ||(Upload_system==4))
		 //url111 = url111+"streamingapp"+ "/" + username + "/" + text22333 //+ "/upload/";
		 url111 = url111+config.cloudStorageSystem4StreamingApp+"/streamingapp"+ "/" + username + "/" + text22333 //+ "/upload/";
	   else  
        url111 =uploaderDomain + username + "/" + text22333 
	


	
	 console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
	   modeal4appNameInput.style.display = "none";
	  
			/*
        var option = document.createElement("option");
        option.text  = text22333;
        var i = Appsfilter.options.length;
        Appsfilter.add(option, i);

        Appsfilter.value = option.value;

        modeal4appNameInput.style.display = "none";

        onAppChange();*/
		
		
      }
    };
  }
  
  var ok4addNewdsAppANameInList = document.getElementById("ok4addNewdsAppANameInList");
  if (ok4addNewdsAppANameInList) {
    ok4addNewdsAppANameInList.onclick = function (event) {
      console.log(`-> SS: ok4addNewdsAppANameInList`);

      var Appsfilter = document.getElementById("ServerApps-filter");
      if (Appsfilter) {
        var e22 = document.getElementById("addNewdsAppANameInList");
        var text22333 = e22.value;

        if (text22333 == "") {
          e3ds_alert(`Type an app name `, { timeout: 2000, color: "red" });
          return;
        } else if (doContainRestrictedCharacters(text22333)){
          e3ds_alert(`App name can't contain special characters `, { timeout: 2000, color: "red" });
          return;
        } else if(text22333.indexOf)
			
		
		
		 var url111 = fileServerUrl;

      url111 = url111 + username + "/" + text22333 + "/server/upload/";
	  
	  //if(Upload_system==1)//http://upload.eagle3dstreaming.com/demo/AAA
        //url111 = "http://upload.eagle3dstreaming.com/" + username + "/" + text22333 
	  
	  //https://upload.eagle3dstreaming.com/azure/streamingapp/demo/dhdh
	  
	  
		url111 = fileServerUrl+config.cloudStorageSystem4DedicatedServerApp+"/dedicatedserver"+ "/" + username + "/" + text22333 //+ "/upload/";
	
	


      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
	  
	  
		

       /* var option = document.createElement("option");
        option.text  = text22333;
        var i = Appsfilter.options.length;
        Appsfilter.add(option, i);

        Appsfilter.value = option.value;

        modeal4dsAppNameInput.style.display = "none";

        //onDSAppChange();*/
      }
    };
  }
  
  
      var ok4addNewserverAppANameInList = document.getElementById("ok4addNewserverAppANameInList");
  if (ok4addNewserverAppANameInList) 
  {
    ok4addNewserverAppANameInList.onclick = function (event) {
      console.log(`-> SS: ok4addNewserverAppANameInList`);
	  
	  var serverAppsfilter = document.getElementById("serverApps-filter");
	  if (serverAppsfilter) 
	  {
		  
		  
      var e22 = document.getElementById("addNewserverAppANameInList");
      var text22333 = e22.value;
	  
	  if(text22333 =="")
	  {
		  e3ds_alert(`Type an serverApp name `,{timeout: 2000, color: 'red'});
		  return
	  }
	  
		 var option = document.createElement("option");
		  option.text = option.value = text22333;
		  var i=serverAppsfilter.options.length
		  serverAppsfilter.add(option, i);
		  
		 serverAppsfilter.value=option.value
			
		modeal4serverAppNameInput.style.display = "none";

		onserverAppChange();
	  }


    };
  }
  
  
var ok4addNewconfigNameInList = document.getElementById("ok4addNewconfigNameInList");
  if (ok4addNewconfigNameInList) 
  {
    ok4addNewconfigNameInList.onclick = function (event) 
	{
      console.log(`-> SS: ok4addNewconfigNameInList`);
	  
	  var AppConfigfilter = document.getElementById("AppConfig-filter");
	  if (AppConfigfilter) 
	  { 
		  var e22 = document.getElementById("addNewconfigNameInList");
		  var text22333 = e22.value;
		  
		  if(text22333 =="")
		  {
			  e3ds_alert(`Type a config name `,{timeout: 2000, color: 'red'});
			  return
		  }
		  
			 var option = document.createElement("option");
			  option.text = text22333;
			  option.value  = undefined;
			  
			   var i=AppConfigfilter.options.length
			  AppConfigfilter.add(option, i);
			  
			 AppConfigfilter.value=option.value
				
			modeal4configNameInput.style.display = "none";
			
			isNewUnsavedConfig=true	
			
			currentSelectedConfig=text22333

		 loadSelectedAppConfig() //--->dont call this bcz this confiug does not exist in server. we need to load dfulat value here----2do
	  }


    };
  }
  
  
  
var SaveSelectedAppConfig = document.getElementById("SaveSelectedAppConfig");
  if (SaveSelectedAppConfig) 
  {
    SaveSelectedAppConfig.onclick = function (event) 
	{
     
			onclickSaveSelectedAppConfig()   

    };
  }
  
  var DeleteSelectedConfig = document.getElementById("DeleteSelectedConfig");
  if (DeleteSelectedConfig) 
  {
    DeleteSelectedConfig.onclick = function (event) 
	{
     
			onclickDeleteSelectedAppConfig()   

    };
  } 
  

  
  var SaveSelectedAppConfig2 = document.getElementById("SaveSelectedAppConfig2");
  if (SaveSelectedAppConfig2) 
  {
    SaveSelectedAppConfig2.onclick = function (event) 
	{
     
			onclickSaveSelectedAppConfig()   

    };
  }
  
  var addLoadingVideoFromDropDownToList = document.getElementById("addLoadingVideoFromDropDownToList");
  if (addLoadingVideoFromDropDownToList) 
  {
    addLoadingVideoFromDropDownToList.onclick = function (event) 
	{
     
			var e = document.getElementById("VideoAssets-filter");
		var app_text22 = e.options[e.selectedIndex].text;
		  
		  if(app_text22=="")
		{
			 e3ds_alert("Empty text Not acceptable", { timeout: 2000, color: "red" });
			return
		}
		
		 var option = document.createElement("option");
		option.text = option.value = app_text22; 

		var loadingVideoList = document.getElementById("loadingVideoList");
		
		var n=0;
		if(loadingVideoList.length<=0)
			n=0
		else
			n=loadingVideoList.length-1
		loadingVideoList.add(option,n );

	} 
  }
  
  
    var removeSelectedVideo = document.getElementById("removeSelectedVideo");
  if (removeSelectedVideo) 
  {
    removeSelectedVideo.onclick = function (event) 
	{
     
			

		var loadingVideoList = document.getElementById("loadingVideoList");
		//loadingVideoList.innerHTML = "";
		loadingVideoList.remove(loadingVideoList.selectedIndex);

	} 
  }
  
  
   var addLoadingVideoFromDirectUrlTextToList = document.getElementById("addLoadingVideoFromDirectUrlTextToList");
  if (addLoadingVideoFromDirectUrlTextToList) 
  {
    addLoadingVideoFromDirectUrlTextToList.onclick = function (event) 
	{
      
	  var app_text22=document.getElementById("VideoURL2play").value
		if(app_text22=="")
		{
			 e3ds_alert("Empty text Not acceptable", { timeout: 2000, color: "red" });
			return
		}
		  
		 var option = document.createElement("option");
		option.text = option.value = app_text22; 

		var loadingVideoList = document.getElementById("loadingVideoList");
		
		var n=0;
		if(loadingVideoList.length<=0)
			n=0
		else
			n=loadingVideoList.length-1
		loadingVideoList.add(option,n );

	} 
  }
  
  
  var SendConfigUpdateOnClientSide = document.getElementById("SendConfigUpdateOnClientSide");
  if (SendConfigUpdateOnClientSide) 
  {
    SendConfigUpdateOnClientSide.onclick = function (event) 
	{
      
		onclickSendConfigUpdateOnClientSide() 	  

    };
  }
  
  
    var SendConfigUpdateOnClientSide2 = document.getElementById("SendConfigUpdateOnClientSide2");
  if (SendConfigUpdateOnClientSide2) 
  {
    SendConfigUpdateOnClientSide2.onclick = function (event) 
	{
      
		onclickSendConfigUpdateOnClientSide() 	  

    };
  }
  
  var AddNewAppConfig = document.getElementById("AddNewAppConfig");
  if (AddNewAppConfig) 
  {
    AddNewAppConfig.onclick = function (event) 
								{
								  console.log(`-> SS: AddNewAppConfig`);

								  var e22 = document.getElementById("newAppConfigame");
								  var text22333 = e22.value;
								  
								  var AppConfigfilter = document.getElementById("AppConfig-filter");
								  if (AppConfigfilter) 
								  {
									//AppConfigfilter.innerHTML = "";

									
									  var efsf = text22333

									  var option = document.createElement("option");
									  option.text = option.value = text22333;
									  AppConfigfilter.append(option);
									 
									   console.log(" AppConfigfilter.length : " +  AppConfigfilter.length);
									  AppConfigfilter.selectedIndex=AppConfigfilter.length-1
									
								  }
							  

								};
  }

  var UploadNewCustomUI = document.getElementById("UploadNewCustomUI");
  if (UploadNewCustomUI) {
    UploadNewCustomUI.onclick = function (event) {
      console.log(`-> SS: UploadNewCustomUI`);

      var e22 = document.getElementById("newCustomUIName");
      var text22333 = e22.value;

      //https://connector.eagle3dstreaming.com:1990/lpx/test1/upload/

      var url111 =
        fileServerUrl + username + "/CustomUI/" + text22333 + "/upload/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var DownloadDetailedCostBtn = document.getElementById(
    "DownloadDetailedCostBtn"
  );
  if (DownloadDetailedCostBtn) {
    DownloadDetailedCostBtn.onclick = function (event) {
      console.log(`-> SS: DownloadDetailedCostBtn`);

      //https://connector.eagle3dstreaming.com:500/bugFixing/CostExplorer/

      var url111 = controlPanelServerUrl + username + "/CostExplorer/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var VisitSelectedOwnerControlPanelBtn = document.getElementById(
    "VisitSelectedOwnerControlPanelBtn"
  );
  if (VisitSelectedOwnerControlPanelBtn) {
    VisitSelectedOwnerControlPanelBtn.onclick = function (event) {
      console.log(`-> SS: VisitSelectedOwnerControlPanelBtn`);

      var OwnerListsFilter = document.getElementById("OwnerListsFilter");
      var owner =
        OwnerListsFilter.options[OwnerListsFilter.selectedIndex].value;

      //https://connector.eagle3dstreaming.com:500/bugFixing/ControlPanel/083057

      var url111 =
        controlPanelServerUrl +
        owner +
         "/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }



   
  var numCCU = document.getElementById("numCCU");
  if (numCCU) 
  {
    numCCU.onchange  =   function() {onnumCCUChange()};
    numCCU.oninput   =   function() {onnumCCUChange()};
  }
  
  
 
    var numStreamTime = document.getElementById("numStreamTime");
  if (numStreamTime) 
  {
    numStreamTime.onchange  =   function() {onnumStreamTimeChange()};
    numStreamTime.oninput   =   function() {onnumStreamTimeChange()};
  }
  
// document.getElementById("fname").onchange = function() {myFunction()};
 
  
  var numCCUSaveX = document.getElementById(
    "numCCUSaveX"
  );
  if (numCCUSaveX) {
    numCCUSaveX.onclick = function (event) {
      console.log(`-> SS: numCCUSaveX`);

      var numCCUX = document.getElementById("numCCUX");
      var numCCUXValue =
       numCCUX.value;
	    
	 var SubscriptionStartDate = new Date(
    document.getElementById("SubscriptionStartDateX").value
  ).toString();
  var SubscriptionEndDate = new Date(
    document.getElementById("SubscriptionEndDateX").value
  ).toString();

  var from = new Date(SubscriptionStartDate).toISOString(); // -1 because months are from 0 to 11
  var to = new Date(SubscriptionEndDate).toISOString(); 

	
var gfdsgdgd = JSON.stringify({
        type: "saveSubscription",
        maxUserLimit: numCCUXValue,
        SubscriptionStartDate: from,
        SubscriptionEndDate: to,
        UserName: username,

       
      });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
	  
	  

    };
  }



 var QueryUsernameBtn = document.getElementById(
    "QueryUsernameBtn"
  );
  if (QueryUsernameBtn) 
  {
	  
    QueryUsernameBtn.onclick = function (event) 
	{
      console.log(`-> SS: QueryUsernameBtn`);
	  var email2Query = document.getElementById("email2Query").value;
	  
	  var sfsfs="/getUsername?email=" + email2Query
	          fetch(sfsfs).then(
		
		respinse => respinse.json()).then(respinse => 
		
		{
            if(respinse.error)
			{
                alert(respinse.error);
                e3ds_alert(respinse.error,{timeout: 2000, color: 'red'});
		
                return;
            }
			console.log(JSON.stringify(respinse));
            e3ds_alert(
			"username:"+respinse.userName +" , email:"+email2Query
			,{ color: 'blue'});
             
		}).catch(err => 
		
					{
						alert(JSON.stringify(err.messsage));
					}
		
		);



    };
  }
  
  
  var QueryEmaileBtn = document.getElementById(
    "QueryEmaileBtn"
  );
  if (QueryEmaileBtn) 
  {
	  
    QueryEmaileBtn.onclick = function (event) 
	{
      console.log(`-> SS: QueryEmaileBtn`);
	  var username2Query = document.getElementById("username2Query").value;
	  var sfsfs="https://api.eagle3dstreaming.com/v1/config/usersEmail?username="+username2Query

	  
	          fetch(sfsfs).then(
		
		respinse => respinse.json()).then(respinse => 
		
		{
            if(respinse.error)
			{
                alert(respinse.error);
                e3ds_alert(respinse.error,{timeout: 2000, color: 'red'});
		
                return;
            }
			console.log(JSON.stringify(respinse));
            e3ds_alert(
			"username:"+username2Query +" , email:"+respinse.email,
			{ color: 'blue'});
             
		}).catch(err => 
		
					{
						alert(JSON.stringify(err.messsage));
					}
		
		);



    };
  }
  

  var ApplyBtn4MachineNumberAdjustment = document.getElementById(
    "ApplyBtn4MachineNumberAdjustment"
  );
  if (ApplyBtn4MachineNumberAdjustment) {
    ApplyBtn4MachineNumberAdjustment.onclick = function (event) {
      console.log(`-> SS: ApplyBtn4MachineNumberAdjustment`);

      var e22 = document.getElementById("RegionFilter4ExistingMachine");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Region text22: " + text22333);
      console.log("Region value: " + value333);

      var slider = document.getElementById("Slider2AdjustRuiningMachine");

      var gfdsgdgd = JSON.stringify({
        type: "ApplyBtn4MachineNumberAdjustment",
        count: slider.value,
        owner: username,

        region: value333,
      });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }
  
  
  var performTaskOnSelectedRunningDedicatedServerMachines = document.getElementById(
    "performTaskOnSelectedRunningDedicatedServerMachines"
  );
  if (performTaskOnSelectedRunningDedicatedServerMachines) {
    performTaskOnSelectedRunningDedicatedServerMachines.onclick = function (event) {
      console.log(`-> SS: performTaskOnSelectedRunningDedicatedServerMachines`);

      var e = document.getElementById("RunningDedicatedServerMachines-filter");
      var value = e.options[e.selectedIndex].value;
      var text22 = e.options[e.selectedIndex].text;

      console.log("RunningDedicatedServerMachines text22: " + text22);
      console.log("RunningDedicatedServerMachines value: " + value);

      var e22 = document.getElementById("Actions-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Actions text22: " + text22333);
      console.log("Actions value: " + value333);

      if (value333)
        var gfdsgdgd = JSON.stringify({
          type: "performTaskOnSelectedRunningDedicatedServerMachines",
          RunningMachine: value,
          owner: username,
          app: "",
        
        });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }
  

  var performTaskOnSelectedRunningMachines = document.getElementById(
    "performTaskOnSelectedRunningMachines"
  );
  if (performTaskOnSelectedRunningMachines) {
    performTaskOnSelectedRunningMachines.onclick = function (event) {
      console.log(`-> SS: performTaskOnSelectedRunningMachines`);

      var e = document.getElementById("RunningMachines-filter");
      var value = e.options[e.selectedIndex].value;
      var text22 = e.options[e.selectedIndex].text;

      console.log("RunningMachines text22: " + text22);
      console.log("RunningMachines value: " + value);

      var e22 = document.getElementById("Actions-filter");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Actions text22: " + text22333);
      console.log("Actions value: " + value333);

      if (value333)
        var gfdsgdgd = JSON.stringify({
          type: "performTaskOnSelectedRunningMachines",
          RunningMachine: value,
          owner: username,
          app: "",
          Action: value333,
        });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }

  var ApplyBtn4NumberOfUserPerVM = document.getElementById(
    "ApplyBtn4NumberOfUserPerVM"
  );
  if (ApplyBtn4NumberOfUserPerVM) {
    ApplyBtn4NumberOfUserPerVM.onclick = function (event) {
      console.log(`-> SS: ApplyBtn4NumberOfUserPerVM`);

      var e = document.getElementById("InstanceType-filter");
      var value = e.options[e.selectedIndex].value;
      var text22 = e.options[e.selectedIndex].text;

      console.log("InstanceType text22: " + text22);
      console.log("InstanceType value: " + value);

      var e22 = document.getElementById("RegionFilter4ExistingMachine");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Region text22: " + text22333);
      console.log("Region value: " + value333);

      var e = document.getElementById("num-user-vm");
      var value232424 = e.value;

      console.log("num-user-vm value: " + value232424);

      var gfdsgdgd = JSON.stringify({
        type: "ApplyBtn4NumberOfUserPerVM",
        count: value232424,
        owner: username,
        instanceType: value,
        region: value333,
      });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }

  var ApplyBtn4AllocatorSchema = document.getElementById(
    "ApplyBtn4AllocatorSchema"
  );
  if (ApplyBtn4AllocatorSchema) {
    ApplyBtn4AllocatorSchema.onclick = function (event) {
      console.log(`-> SS: ApplyBtn4AllocatorSchema`);
	  
	    var e22 = document.getElementById("RegionFilter4Allocator");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;
	  


      var gfdsgdgd = JSON.stringify({
        type: "ApplyBtn4AllocatorSchema",
        region: text22333,
        AllocatorSchemaValue: document.getElementById("AllocatorSchemasfilter")
          .value,
        AllocatorSchemaText: document.getElementById("AllocatorSchemasfilter")
          .text,
        VmLabel: document.getElementById("VmLabel").value,
        numMachineTokeep: document.getElementById("numMachineTokeep").value,
        ShouldAutoTurnOff: document.getElementById("ShouldAutoTurnOff").checked,
        AutoMachineCreation: document.getElementById("AutoMachineCreation").checked,
        enableunlockedgeoLocation: document.getElementById("enableunlockedgeoLocation").checked,
        numBufferInstance: document.getElementById("numBufferInstance").value,
      });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }
  
   var ApplyBtn4AllocatorSchema2 = document.getElementById(
    "ApplyBtn4AllocatorSchema2"
  );
  if (ApplyBtn4AllocatorSchema2) {
    ApplyBtn4AllocatorSchema2.onclick = function (event) 
	{
      console.log(`-> SS: ApplyBtn4AllocatorSchema2`);
	  
	    var fdgdg=document.getElementById("RegionFilter4Allocator2")
          .value
		  
	if(fdgdg=="")
		 {
		e3ds_alert(`select a alloator region `,{timeout: 2000, color: 'red'});
			
		return
	 }
	 
	  fdgdg=document.getElementById("numBufferInstance2")
          .value
		  
	 if(fdgdg=="")
		 {
		e3ds_alert(`Set numBufferInstance and then try again`,{timeout: 2000, color: 'red'});
			
		return
	 }
	 
	 

       var e22 = document.getElementById("RegionFilter4Allocator2");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      var gfdsgdgd = JSON.stringify({
        type: "ApplyBtn4AllocatorSchema",
        region: text22333,
		owner: username,
        AllocatorSchemaValue: document.getElementById("AllocatorSchemasfilter2")
          .value,
        AllocatorSchemaText: document.getElementById("AllocatorSchemasfilter2")
          .text,
        numMachineTokeep: document.getElementById("numMachineTokeep2").value,
        ShouldAutoTurnOff: document.getElementById("ShouldAutoTurnOff2").checked,
        AutoMachineCreation: document.getElementById("AutoMachineCreation2").checked,
        enableunlockedgeoLocation: document.getElementById("enableunlockedgeoLocation").checked,
        numBufferInstance: document.getElementById("numBufferInstance2").value,
      });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }


 var ApplyBtn4MachineType = document.getElementById(
    "ApplyBtn4MachineType"
  );
  if (ApplyBtn4MachineType) {
    ApplyBtn4MachineType.onclick = function (event) {
      console.log(`-> SS: ApplyBtn4MachineType`);
	  
	    var e22 = document.getElementById("MachineTypeFilter4Allocator");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;
	  


      var gfdsgdgd = JSON.stringify({
        type: "ApplyBtn4MachineType",
        MachineType: text22333
        });

      console.log(" ws.send(): " + gfdsgdgd);

      ws.send(gfdsgdgd);
    };
  }
  
  
  var testAllRuninnigInstancesAsSpectator = document.getElementById(
    "testAllRuninnigInstancesAsSpectator"
  );
  if (testAllRuninnigInstancesAsSpectator) {
    testAllRuninnigInstancesAsSpectator.onclick = function (event) {
      console.log(`-> SS: testAllRuninnigInstancesAsSpectator`);

      var e = document.getElementById("Apps-filter");
      var app_value = e.options[e.selectedIndex].value;
      var app_text22 = e.options[e.selectedIndex].text;

      var url111 =
        mmlinkerUrl +
        username +
        "/" +
        app_value +
        "/API/testAllInstancesAsSpectator/";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var Observer = document.getElementById("Observer");
  if (Observer) {
    Observer.onclick = function (event) {
      console.log(`-> SS: Observer`);

      var url111 = mmlinkerUrl + "API/observer";

      console.log("---------url111 : " + url111);
      window.open(url111, "_blank");
    };
  }

  var GenrateLinks = document.getElementById("GenrateLinks");
  if (GenrateLinks) 
  {
   

    GenrateLinks.onclick = function (event) {
      console.log(`-> SS: GenrateLinks`);
	  
	   var e = document.getElementById("Apps-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select an App `,{timeout: 2000, color: 'red'});
			
		return
	 }	
	  e = document.getElementById("AppConfig-filter");
	 	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 
	/*   
	    generateHostLink();
    HostLink.value = lastHostLink;
    GuestLink.value = lastGuestLink;
	return */
 
      var url2222 = generateSelectedAppLink();

      var meeetingID = uuidv4();

      var ttt = url2222 + "?hostMeetingId=" + meeetingID;
      //var ttt2=url111+"&GuestMeetingId="+meeetingID
      console.log(ttt);
      HostLink.value = ttt;
	  
	  if(sysVersion==4)
	{
	   var josnObj= generateJson4AppRequest() 
	   josnObj.hostMeetingId=meeetingID
	   
	   
	    console.log(`6666666666666 JSON.stringify(josnObj): ` + JSON.stringify(josnObj)); 
	 var encrytedJson=encryptJosn(josnObj)
	  //var dgdgdurl111 = mmlinkerUrl +"v4/"+ "4343553535?trackerId=" + fsgsgsggsg;
	  var url = mmlinkerUrl +"v4/"+ encrytedJson;
	  
	 
	   
	    HostLink.value =  url
		
		  console.log(`6666666666666 HostLink.value: ` + HostLink.value);
	  
	}

      var tttt11111 = document.getElementById("isAdminDebugging").checked? "1": "0";

      if (!isAdmin) tttt11111 = "0";

      var url111 =
        mmlinkerUrl +
        username +
        "/meeting/156478" +
        "?GuestMeetingId=" +
        meeetingID +
        "&isAdminDebugging=" +
        tttt11111+
		"&useVOIP=" +
		(document.getElementById("useVOIP").checked ? "1" : "0") 
		
		;

      // var e = document.getElementById("CustomUISelctionFilter");
      // var CustomUISelctionFilter_value = e.options[e.selectedIndex].value;
      // var CustomUISelctionFilter_text22 = e.options[e.selectedIndex].text;

      //if(CustomUISelctionFilter_value!="Default")
    //  url111 = url111 + "&custom_html=" + CustomUISelctionFilter_value;
 // GuestLink.value = url111;
	   
	  
	  
	if( (sysVersion==5) || (sysVersion==6))
	{
		 var e = document.getElementById("Apps-filter");
		  var app_value = e.options[e.selectedIndex].value;
		  var app_text22 = e.options[e.selectedIndex].text;
		  
		   
		  	   	 var e = document.getElementById("AppConfig-filter");
  var ConfigName_value = e.options[e.selectedIndex].value;
  var configName = e.options[e.selectedIndex].text;
		  
	//https://connector_ms7.eaglepixelstreaming.com/v5/demo/AAA/aaa
	  var url = mmlinkerUrl +"v5/"+  username+"/"+configName;
	  
	   //https://connector_beta.eaglepixelstreaming.com/v5/demo/aaa?GuestMeetingId=adf09d33-ef6c-472c-97e7-a22dad3b56c1
	    var ttt = url + "?GuestMeetingId=" + meeetingID;
      //var ttt2=url111+"&GuestMeetingId="+meeetingID
      console.log(ttt);
      GuestLink.value = ttt;
	   
	}
	else if(sysVersion==4)
		{


		   var josnObj= generateJson4AppRequest() 
		   josnObj.GuestMeetingId=meeetingID
		   
		   
			console.log(`6666666666666 JSON.stringify(josnObj): ` + JSON.stringify(josnObj)); 
		 var encrytedJson=encryptJosn(josnObj)
		  //var dgdgdurl111 = mmlinkerUrl +"v4/"+ "4343553535?trackerId=" + fsgsgsggsg;
		  var url = mmlinkerUrl +"v4/"+ encrytedJson;
		  
		 
		   
			GuestLink.value = url;
			
			  console.log(`6666666666666 HostLink.value: ` + HostLink.value);
		  
		}
		
	

      

      document.getElementById("copyHostLink").disabled = false;
      document.getElementById("tryHostLink").disabled = false;
      document.getElementById("copyGuestLink").disabled = false;
      document.getElementById("tryGuestLink").disabled = false;
    };
  }
}

function tryDownloadLatestUe4BuildBtnLink() {
  var ue4link =
    "https://eagle3dstreaming-build-upload-1.s3.amazonaws.com/0.extras/UE4/1.zip";

  window.open(ue4link, "_blank");
}

function generateSelectedAppLink(sysVersion=5) {
	
	 var e = document.getElementById("Apps-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select an App `,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 
	 	  e = document.getElementById("AppConfig-filter");
	 	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 
	//https://connector_ms7.eaglepixelstreaming.com/v5/demo/AAA/aaa
  var url111 =
    mmlinkerUrl +
    (document.getElementById("UseiFrame").checked ? "system2/" : "");
  
  	if(sysVersion==4)
	{
		url111=generateSelectedAppLinkForv4()
	}
	else if(sysVersion==5)
	{
		url111=generateSelectedAppLinkForv5()
	}
	else if(sysVersion==6)
	{
		url111=generateSelectedAppLinkForv6()
	}
	else
	{
		  var e = document.getElementById("Apps-filter");
		  var app_value = e.options[e.selectedIndex].value;
		  var app_text22 = e.options[e.selectedIndex].text;

		  // var e = document.getElementById("onDemandRegionsFilter");
		  // var onDemandRegionsFilter32323 = e.options[e.selectedIndex].value;
		  // var onDemandRegionsFilterfsfsfsf = e.options[e.selectedIndex].text;

		  // var e = document.getElementById("CustomUISelctionFilter");
		  // var CustomUISelctionFilter_value = e.options[e.selectedIndex].value;
		  // var CustomUISelctionFilter_text22 = e.options[e.selectedIndex].text;

		  var e2 = document.getElementById("MouseControlScheme-Filter");
		  var MouseControlScheme_value = e2.options[e2.selectedIndex].value;
		  var MouseControlScheme_text22 = e2.options[e2.selectedIndex].text;

		  var e3 = document.getElementById("TurnServerFilter");
		  var TurnServerFilter_value = e3.options[e3.selectedIndex].value;
		  var TurnServerFilter_text22 = e3.options[e3.selectedIndex].text;
		  
		  var tttt11111 = document.getElementById("isAdminDebugging").checked ? "1" : "0";

		  if (!isAdmin) tttt11111 = "0";


		 

		  //if(document.getElementById("isProd2System").checked)
		  

		  url111 =
			url111 +
			username +
			"?appName=" +
			app_text22 +
			"&isAdminDebugging=" +
			tttt11111 +
			"&showbrowserMouse=" +
			(document.getElementById("showbrowserMouse").checked ? "1" : "0") +
			"&ShouldAutoPlay=" +
			(document.getElementById("ShouldAutoPlay").checked ? "1" : "0") +
			
			"&ShouldUseCdn=" +
			(document.getElementById("ShouldUseCdn").checked ? "1" : "0") +
			"&fakeMouseWithTouches=" +
			(document.getElementById("fakeMouseWithTouches").checked ? "1" : "0") +
			"&suppressBrowserKeys=" +
			(document.getElementById("suppressBrowserKeys").checked ? "1" : "0") +
			
			
			"&useExtendedTyping=" +
			(document.getElementById("useExtendedTyping").checked ? "1" : "0") +
			"&showPsControl=" +
			(document.getElementById("showPsControl").checked ? "1" : "0") +
		   // "&useVOIP=" +
		   // (document.getElementById("useVOIP").checked ? "1" : "0") +
			"&TurnServer=" +
			TurnServerFilter_value +
	
	 "&audioType=" +
    (document.getElementById("audioType-Filter").value) + 
	
	 "&audioMaxAverageBitrate=" +
    (document.getElementById("audioMaxAverageBitrate").value) + 
	
	
			 "&qualityLevel=" +
    (document.getElementById("qualityLevel-Filter").value) + 
	
	"&quality=" +
    (document.getElementById("quality").value) +
	
	   "&minBitrate=" +
    (document.getElementById("minBitrate").value) +
	   "&maxBitrate=" +
    (document.getElementById("maxBitrate").value) +
	   "&resolution=" +
    (document.getElementById("resolution").value) +
	
	   "&rateCtrl=" +
    (document.getElementById("rateCtrl").value) +
	
			"&useVOIP=" +
		   (document.getElementById("useVOIP").checked ? "1" : "0") +
			
			
			"&MouseControlScheme=" +
			MouseControlScheme_value +
			"&expireOn=" +
			document.getElementById("ExpireTime").value + //+"000"
			"&exeLunchArgs=" +
			"-ResX=" +
			document.getElementById("ResulationX").value +
			"%20-ResY=" +
			document.getElementById("ResulationY").value;

		  //if(CustomUISelctionFilter_value!="Default")
		 // url111 = url111 + "&custom_html=" + CustomUISelctionFilter_value;
		  //https://connector.eagle3dstreaming.com/bugFixing?appName=MP_PS2&isAdminDebugging=1&showbrowserMouse=0&expireOn=999999999&exeLunchArgs=-ResX=1080%20%20-ResY=720&onDemand=1&onDemandRegion=us-west-1
		  //&onDemand=1&onDemandRegion=us-west-1

		 

		  //https://connector.eagle3dstreaming.com/epicaws?appName=MP_PS2&isAdminDebugging=1&showbrowserMouse=0&expireOn=72000000



		//////////////


	}
  return url111;
}

function generateJson4AppRequest() 
{
	 var e = document.getElementById("Apps-filter");
  var app_value = undefined
  var app_text22 = undefined
  
  if(e.selectedIndex != -1)
  {
	  
	    app_value = e.options[e.selectedIndex].value;
   app_text22 = e.options[e.selectedIndex].text;
	  
  }
  // var e = document.getElementById("onDemandRegionsFilter");
  // var onDemandRegionsFilter32323 = e.options[e.selectedIndex].value;
  // var onDemandRegionsFilterfsfsfsf = e.options[e.selectedIndex].text;

  // var e = document.getElementById("CustomUISelctionFilter");
  // var CustomUISelctionFilter_value = e.options[e.selectedIndex].value;
  // var CustomUISelctionFilter_text22 = e.options[e.selectedIndex].text;

  var e2 = document.getElementById("MouseControlScheme-Filter");
  var MouseControlScheme_value = e2.options[e2.selectedIndex].value;
  var MouseControlScheme_text22 = e2.options[e2.selectedIndex].text;
  
  
  var e2 = document.getElementById("streamingProrityFilter");
  var streamingPrority_value = e2.options[e2.selectedIndex].value;
  var streamingPrority_text22 = e2.options[e2.selectedIndex].text;

  var e3 = document.getElementById("TurnServerFilter");
  var TurnServerFilter_value = e3.options[e3.selectedIndex].value;
  var TurnServerFilter_text22 = e3.options[e3.selectedIndex].text;  
  
  var edddd = document.getElementById("StreamerTurnServerFilter");
  var StreamerTurnServerFilter_value = edddd.options[edddd.selectedIndex].value;
  var StreamerTurnServerFilter_text22 = edddd.options[edddd.selectedIndex].text;  
  

  var e3efe = document.getElementById("EmulatedGeoLocationFilter");
  var EmulatedGeoLocationFilter_value = e3efe.options[e3efe.selectedIndex].value;
  var EmulatedGeoLocationFilter_text22 = e3efe.options[e3efe.selectedIndex].text;

  var tttt11111 = document.getElementById("isAdminDebugging").checked ? "1" : "0";
  if (!isAdmin) 
	  tttt11111 = "0";



 
 var qualityLevel_value =""
 var qualityLevel_text22 =""
/*   var e2 = document.getElementById("qualityLevel-Filter");
 if(e2.options[e2.selectedIndex])
 {
		   qualityLevel_value = e2.options[e2.selectedIndex].value;
		   qualityLevel_text22 = e2.options[e2.selectedIndex].text;
 }
 */

 
 
  var audioType_value =""
 var audioType_text22 ="" 
   var e3 = document.getElementById("audioType-Filter");
if(e3.options[e3.selectedIndex])
 {
		   audioType_value = e3.options[e3.selectedIndex].value;
		   audioType_text22 = e3.options[e3.selectedIndex].text;
		  
 } 
		

  var e2x = document.getElementById("platformFilter");
  var platformFilter_value = e2x.options[e2x.selectedIndex].value;
  var platformFilter_text22 = e2x.options[e2x.selectedIndex].text;

  
	var objfsgsg = {
		appName: app_text22,
		owner: username,
		isAdminDebugging: tttt11111,
		useExtendedTyping: document.getElementById("useExtendedTyping").checked ? "1" : "0" ,
		//isVrApp: document.getElementById("isVrApp").checked ? "1" : "0" ,
		platform: platformFilter_value ,
		
		TurnServer: TurnServerFilter_value,
		StreamerTurnServerMode: StreamerTurnServerFilter_value,
		EmulatedGeoLocationInfo: 
								{//https://www.gps-coordinates.net/
									longitude:document.getElementById("emulatedLongitude").value,
									latitude:document.getElementById("emulatedLatitude").value
								},
		
		audioMaxAverageBitrate:(document.getElementById("audioMaxAverageBitrate").value) ,		
		audioType:audioType_value ,
		qualityLevel:qualityLevel_value ,
		//quality:(document.getElementById("quality").value) ,
		urlExpiretime: new Date(document.getElementById("urlExpiretime").value).toString(),
		//minBitrate:(document.getElementById("minBitrate").value) ,
		//maxBitrate:(document.getElementById("maxBitrate").value) ,
		//resolution:(document.getElementById("resolution").value) ,
		//rateCtrl:(document.getElementById("rateCtrl").value) ,
		shouldDebugUE4: document.getElementById("shouldDebugUE4").checked? "1": "0",  
		shouldDownloadUE4LogOnClientSide: document.getElementById("shouldDownloadUE4LogOnCLientSide").checked? "1": "0",  
		//isE3DSEngineApp: document.getElementById("isE3DSEngineApp").checked? "1": "0",  
		showbrowserMouse: document.getElementById("showbrowserMouse").checked? "1": "0",
		resolutionType_ue4: document.getElementById("resolutionFilter").value,
		ResulationX_ue4: document.getElementById("ResulationX_ue4").value,
		ResulationY_ue4: document.getElementById("ResulationY_ue4").value,
		ShouldAutoPlay: document.getElementById("ShouldAutoPlay").checked? "1": "0",
		PreventPixalizationByCompromisingResolution: document.getElementById("PreventPixalizationByCompromisingResolution").checked? "1": "0",
		ShouldUseCdn: document.getElementById("ShouldUseCdn").checked? "1": "0",
		fakeMouseWithTouches: document.getElementById("fakeMouseWithTouches").checked? "1": "0", 
		suppressBrowserKeys: document.getElementById("suppressBrowserKeys").checked? "1": "0", 
		showPsControl: document.getElementById("showPsControl").checked ? "1" : "0",
		showWebrtcCtrlMenu: document.getElementById("showWebrtcCtrlMenu").checked ? "1" : "0",
		
		enableScreenshot: document.getElementById("enableScreenshot").checked ? "1" : "0",
		enableRuntimeNotifications: document.getElementById("enableRuntimeNotifications").checked ? "1" : "0",
		shouldDisplayContorlBar: document.getElementById("shouldDisplayContorlBar").checked ? "1" : "0",
		ForceLandScapeMode: document.getElementById("ForceLandScapeMode").checked ? "1" : "0",
		DoRandomSuffleInLoadingVideoAssets: document.getElementById("DoRandomSuffleInLoadingVideoAssets").checked ? "1" : "0",
		shouldAppendOveridingcmdLineArgs: document.getElementById("shouldAppendOveridingcmdLineArgs").checked ? "1" : "0",
		shouldInjectCmdlines: document.getElementById("shouldInjectCmdlines").checked ? "1" : "0",
		doForceReDownload: document.getElementById("doForceReDownload").checked ? "1" : "0",
		isAfkEnabled: document.getElementById("isAfkEnabled").checked ? "1" : "0",
		LunchMostRecentAlreadyAvailable: document.getElementById("LunchMostRecentAlreadyAvailable").checked ? "1" : "0",
		LunchMostRecentAlreadyAvailable: document.getElementById("LunchMostRecentAlreadyAvailable").checked ? "1" : "0",
		afkCloseTimeout:(document.getElementById("afkCloseTimeout").value) ,
		afkWarnTimeout:(document.getElementById("afkWarnTimeout").value) ,
		
		useVOIP: (document.getElementById("useVOIP").checked ? "1" : "0") ,
		voipRoomName: document.getElementById("voipRoomName").value  ,
		passwordToStart: document.getElementById("passwordToStart").value  ,
		streamingPrority: streamingPrority_value,
		MouseControlScheme: MouseControlScheme_value,
		expireOn: document.getElementById("ExpireTime").value+"minutes",
		developersEmail:document.getElementById("developersEmail").value,
		exeLunchArgs:
					 // "-ResX=" +
					 // document.getElementById("ResulationX").value +
					 // "  -ResY=" +
					 // document.getElementById("ResulationY").value
					  
					 // +" "
					 // +
					  document.getElementById("CmdLineParameters").value
		  
		  
		  ,
		//custom_html: CustomUISelctionFilter_value,
		//onDemand: false,
		//onDemandRegion: onDemandRegionsFilter32323,
		BGI4Queue: document.getElementById("preview_BGI4Queue").getAttribute('src')    ,
		BGI: document.getElementById("preview_BGI").getAttribute('src'),   
		LoadingImg: document.getElementById("preview_LoadingImg").getAttribute('src'),
		PlayBtn: document.getElementById("preview_PlayBtn").getAttribute('src'),
		Logo: document.getElementById("preview_Logo").getAttribute('src'),
		TitleBarIcon: document.getElementById("preview_TitleBarIcon").getAttribute('src')
		
	  };
	  
	  	
	  
	  
	//  var fsfs=document.getElementById("VideoURL2play").value
	 // if(fsfs!="")
		//  objfsgsg.videoToPlay=fsfs
	
	
		var loadingVideoList = document.getElementById("loadingVideoList");
		
		var videos = new Array();


	  if (loadingVideoList) 
	  {
		
		for (var i = 0; i < loadingVideoList.length; i++) 
		{
		  

			videos.push(loadingVideoList.options[i].text)

   
		}
	  }
	  
	 objfsgsg.loadingVideoList=videos
	  
	return objfsgsg
}


function encryptJosn(objfsgsg) 
{
	  var fsfsg = JSON.stringify(objfsgsg);
	  console.log(`encryptJosn JSON.stringify(josnObj): ` +fsfsg); 
	
	   var fsgsgsggsg = btoa(fsfsg);
	  console.log(`encryptJosn btoa: ` + fsgsgsggsg);
	  console.log(`encryptJosn atob: ` + atob(fsgsgsggsg));

	return fsgsgsggsg

}


function onclickSendConfigUpdateOnClientSide() 
{
	console.log(`-> SS: SendConfigUpdateOnClientSide`);
	
	 var e = document.getElementById("AppConfig-filter");
		  if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 

	var josnObj= generateJson4AppRequest()
	   
	   	
	 
  var ConfigName_value = e.options[e.selectedIndex].value;
  var configName = e.options[e.selectedIndex].text;
  
  
   var e22 = document.getElementById("Apps-filter");
  var value333 = e22.options[e22.selectedIndex].value;
  var text22333 = e22.options[e22.selectedIndex].text;
  

			var gfdsgdgd = JSON.stringify({
				type: "SendConfigUpdateOnClientSide",
				ConfigObj: josnObj,
				configName: configName,
				 owner: username,
				 app: text22333,
				
			  });
			  ws.send(gfdsgdgd);
			  console.log(" ws.send(): " + gfdsgdgd);   
	
}



function onclickDeleteSelectedAppConfig() 
{
	 console.log(`-> SS: onclickDeleteSelectedAppConfig`);

	   
	var e = document.getElementById("AppConfig-filter");
		 
	if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 
  var ConfigName_value = e.options[e.selectedIndex].value;
  var configName = e.options[e.selectedIndex].text;
  


			var gfdsgdgd = JSON.stringify({
				type: "deleteConfigObj",
				
				configName: configName,
				 owner: username,
				
				
			  });
			  ws.send(gfdsgdgd);
			  console.log(" ws.send(): " + gfdsgdgd);
}

function callback(xmlHttp) 
{
	var responseText=xmlHttp.responseText
	xmlHttp.isCalled=true
	console.log("9999999999 responseText :    " + responseText);
 
  var ttttt = JSON.parse(responseText);
  var url=ttttt.data.url//[0]
  console.log("9999999999 ttttt.url :    " + url);

window.open(url , "_blank");


 

}


function onclickSaveSelectedAppConfig() 
{
	 console.log(`-> SS: SaveSelectedAppConfig`);

	var josnObj= generateJson4AppRequest()
	   
	   	 var e = document.getElementById("AppConfig-filter");
		 
		  if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 
  var ConfigName_value = e.options[e.selectedIndex].value;
  var configName = e.options[e.selectedIndex].text;
  
  
   var e22 = document.getElementById("Apps-filter");
   var value333 = undefined
  var text22333 = undefined
    if(e22.selectedIndex != -1)
  {
	  
	     value333 = e22.options[e22.selectedIndex].value;
   text22333 = e22.options[e22.selectedIndex].text;
	  
  }
  
  
  

			var gfdsgdgd = JSON.stringify({
				type: "saveConfigObj",
				ConfigObj: josnObj,
				configName: configName,
				 owner: username,
				 app: text22333,
				
			  });
			  ws.send(gfdsgdgd);
			  console.log(" ws.send(): " + gfdsgdgd); 
			  
}
function generateSelectedAppLinkForv4() 
{
	 var josnObj= generateJson4AppRequest() 
	 var encrytedJson=encryptJosn(josnObj)
	  //var dgdgdurl111 = mmlinkerUrl +"v4/"+ "4343553535?trackerId=" + fsgsgsggsg;
	  var url = mmlinkerUrl +"v4/"+ encrytedJson;
	  
	   console.log(`6666666666666 url: ` + url);
	   
	   return url
}
function generateSelectedAppLinkForv6() 
{
	 var e = document.getElementById("Apps-filter");
				  var app_value = e.options[e.selectedIndex].value;
				  var app_text22 = e.options[e.selectedIndex].text;
				  
				  
						 var e = document.getElementById("AppConfig-filter");
		  var ConfigName_value = e.options[e.selectedIndex].value;
		  var configName = e.options[e.selectedIndex].text;
				  

		   var josnObj= {
			   owner: username,
			   appName: app_text22,
			   configName: configName,
			   //meeetingID:meeetingID
			   
			   
		   }
		   
		   
		   
			console.log(`6666666666666 JSON.stringify(josnObj): ` + JSON.stringify(josnObj)); 
		 var encrytedJson=encryptJosn(josnObj)
		  //var dgdgdurl111 = mmlinkerUrl +"v4/"+ "4343553535?trackerId=" + fsgsgsggsg;
		  var url = mmlinkerUrl +"v6/"+ encrytedJson;
		  
		  // console.log(`6666666666666 url: ` + url);
		  return url
		 
		   
			
	
}



function generateSelectedAppLinkForv5() 
{
		
	 
	 var e = document.getElementById("Apps-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select an App `,{timeout: 2000, color: 'red'});
			
		return
	 }			
		  var app_value = e.options[e.selectedIndex].value;
		  var app_text22 = e.options[e.selectedIndex].text;
		  
		  
  var e = document.getElementById("AppConfig-filter");
  var ConfigName_value = e.options[e.selectedIndex].value;
  var configName = e.options[e.selectedIndex].text;
		  
	//https://connector_ms7.eaglepixelstreaming.com/v5/demo/AAA/aaa
	  var url = mmlinkerUrl +"v5/"+  username+"/"+app_text22+"/"+configName;
	  
	  
	   var e2 = document.getElementById("AppVersionFilter");
	 if
	 (
		 (e2.selectedIndex != -1)
		 &&
		 (e2.options[e2.selectedIndex].text != -1)
	 )
	 {
		url=url+"?appVersion="+e2.options[e2.selectedIndex].text
	 }
	 
	 
	   console.log(`6666666666666 url: ` + url);
	   
	   return url
}



function onUseiFrameClicked() {
 // var e = document.getElementById("CustomUISelctionFilter");
 // e.value = "Default";
}

function onCustomUISelctionFilterChange() {
 // var e = document.getElementById("UseiFrame");
 // e.checked = false;
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


var startText;
var gifimg;

function ResetImg(topic) {
  var e22 = document.getElementById("Apps-filter");
  var value333 = e22.options[e22.selectedIndex].value;
  var text22333 = e22.options[e22.selectedIndex].text;

  console.log("Apps text22: " + text22333);
  console.log("Apps value: " + value333);

  var gfdsgdgd = JSON.stringify({
    type: "ResetImg",
    topic: topic,
    owner: username,
    app: text22333,
  });
  ws.send(gfdsgdgd);
  console.log(" ws.send(): " + gfdsgdgd);
}


var startText;
var gifimg;


function updateAfkOverlayText() {
  afk.overlay.innerHTML =
    "<center>No activity detected<br>Disconnecting in " +
    afk.countdown +
    " seconds<br>Click to continue<br></center>";
}

function showGif() {
  // var startText = document.createElement('div');
  // startText.id = 'playButton';
  // startText.innerHTML = 'Click to start';

  //document.getElementById('playButton').style.display = "none";
  // var playOverlay = document.getElementById("videoPlayOverlay");
  var img = document.createElement("img");
  img.src = loadingImg;
  img.alt = "Loading.....";

  var playerDiv = document.getElementById(
    // 'player'
    "playButton"
  );
  //playOverlay
  playerDiv.appendChild(img);
  screenCount++;
}



function sendInputData(data) {
  if (webRtcPlayerObj) {
    resetAfkWarningTimer();
    webRtcPlayerObj.send(data);
  }
}

function addResponseEventListener(name, listener) {
  responseEventListeners.set(name, listener);
}

function removeResponseEventListener(name) {
  responseEventListeners.remove(name);
}



var styleWidth;
var styleHeight;
var styleTop;
var styleLeft;
var styleCursor = "default";
var styleAdditional = "cursor: default";

function resizePlayerStyleToFillWindow(playerElement) {
  let videoElement = playerElement.getElementsByTagName("VIDEO");

  // Fill the player display in window, keeping picture's aspect ratio.
  let windowAspectRatio = window.innerHeight / window.innerWidth;
  let playerAspectRatio =
    playerElement.clientHeight / playerElement.clientWidth;
  // We want to keep the video ratio correct for the video stream
  let videoAspectRatio = videoElement.videoHeight / videoElement.videoWidth;

  var style;

  if (isNaN(videoAspectRatio)) {
    //Video is not initialised yet so set playerElement to size of window
    styleWidth = window.innerWidth;
    styleHeight = window.innerHeight;
    styleTop = 0;
    styleLeft = 0;
    //playerElement.
    style =
      "top: " +
      styleTop +
      "px; left: " +
      styleLeft +
      "px; width: " +
      styleWidth +
      "px; height: " +
      styleHeight +
      "px; cursor: " +
      styleCursor +
      "; " +
      styleAdditional;
  } else if (windowAspectRatio < playerAspectRatio) {
    // Window height is the constraining factor so to keep aspect ratio change width appropriately
    styleWidth = Math.floor(window.innerHeight / videoAspectRatio);
    styleHeight = window.innerHeight;
    styleTop = 0;
    styleLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
    //Video is now 100% of the playerElement, so set the playerElement style
    //playerElement.
    style =
      "top: " +
      styleTop +
      "px; left: " +
      styleLeft +
      "px; width: " +
      styleWidth +
      "px; height: " +
      styleHeight +
      "px; cursor: " +
      styleCursor +
      "; " +
      styleAdditional;
  } else {
    // Window width is the constraining factor so to keep aspect ratio change height appropriately
    styleWidth = window.innerWidth;
    styleHeight = Math.floor(window.innerWidth * videoAspectRatio);
    styleTop = Math.floor((window.innerHeight - styleHeight) * 0.5);
    styleLeft = 0;
    //Video is now 100% of the playerElement, so set the playerElement style
    //playerElement.
    style =
      "top: " +
      styleTop +
      "px; left: " +
      styleLeft +
      "px; width: " +
      styleWidth +
      "px; height: " +
      styleHeight +
      "px; cursor: " +
      styleCursor +
      "; " +
      styleAdditional;
  }

  setBackground(playerElement, style);
}

function resizePlayerStyleToActualSize(playerElement) {
  let videoElement = playerElement.getElementsByTagName("VIDEO");

  if (videoElement.length > 0) {
    // Display image in its actual size
    styleWidth = videoElement[0].videoWidth;
    styleHeight = videoElement[0].videoHeight;
    styleTop = Math.floor((window.innerHeight - styleHeight) * 0.5);
    styleLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
    //Video is now 100% of the playerElement, so set the playerElement style
    //playerElement.
    style =
      "top: " +
      styleTop +
      "px; left: " +
      styleLeft +
      "px; width: " +
      styleWidth +
      "px; height: " +
      styleHeight +
      "px; cursor: " +
      styleCursor +
      "; " +
      styleAdditional;
    setBackground(playerElement, style);
  }
}

function resizePlayerStyleToArbitrarySize(playerElement) {
  let videoElement = playerElement.getElementsByTagName("VIDEO");
  //Video is now 100% of the playerElement, so set the playerElement style
  //playerElement.
  style =
    "top: 0px; left: 0px; width: " +
    styleWidth +
    "px; height: " +
    styleHeight +
    "px; cursor: " +
    styleCursor +
    "; " +
    styleAdditional;

  setBackground(playerElement, style);
}

function setBackground(playerElement, style) {
  console.log("9999999999 screenCount:  " + screenCount);

  playerElement.style = style;
  return;
  if (screenCount == 2)
    playerElement.style = style + ";background-image: 'none';";
  else
    playerElement.style =
      style + ";background-image: url('images/background.jpg');";
  //playerElement.style = style + ";background-image: url('images/backgroundv1.jpg');";
}


function resizePlayerStyle(event) {
  return;
  //checkOrientationChange();

  var playerElement = document.getElementById("player");

  if (!playerElement) return;

  setTimeout(updateVideoStreamSize, 50);

  // Calculating and normalizing positions depends on the width and height of
  // the player.
  playerElementClientRect = playerElement.getBoundingClientRect();
  setupNormalizeAndQuantize();

  if (playerElement.classList.contains("fixed-size")) return;

  let checkBox = document.getElementById("enlarge-display-to-fill-window-tgl");
  let windowSmallerThanPlayer =
    window.innerWidth < playerElement.videoWidth ||
    window.innerHeight < playerElement.videoHeight;
  if (checkBox !== null) {
    if (checkBox.checked || windowSmallerThanPlayer) {
      resizePlayerStyleToFillWindow(playerElement);
    } else {
      resizePlayerStyleToActualSize(playerElement);
    }
  } else {
    resizePlayerStyleToArbitrarySize(playerElement);
  }
  resizeFreezeFrameOverlay();
}



var playerElementClientRect = undefined;
var normalizeAndQuantizeUnsigned = undefined;
var normalizeAndQuantizeSigned = undefined;





function start() {
  console.log("11111111111111 start");
  let statsDiv = document.getElementById("stats");
  if (statsDiv) {
    statsDiv.innerHTML = "Not connected";
  }

  if (!connect_on_load || is_reconnection) {
   
    //showGif()
    
  
    //resizePlayerStyle();
    //validateSession(checkSessionConnect);
    connect();
  } else {
    ///validateSession(checkSessionConnect);
    connect();
  }

 
}

var MapLoadingAnimationText = "Map Loading.";
var MapLoadingAnimationTimer;
var animationCount = 0;

function ShowInfoInLines(title, msgs, url) {
  var timeoutText = document.createElement("div");
  timeoutText.id = "timeoutText";
  //timeoutText.className = 'cover';
  var ttt = "<h1>" + title + "</h1>";

  for (var i = 0; i < msgs.length; i++) {
    ttt = ttt + "<p>" + msgs[i] + "\n" + "<br>";
  }

  if (url !== "" && url !== undefined)
    ttt =
      ttt +
      `<nav > <a data-label="global-footer" href=` +
      url +
      `>upload</a> </nav>`;

  timeoutText.innerHTML = ttt;

  console.log("timeoutText.innerHTM : " + ttt);

  setOverlay("cover", timeoutText);

  /*
	enag this kes the page to reload on faliure which causes to try to aonnect another player with ss.
	which will cause to ask exe luncher to have to relunch cmd in parallel
	if (ws) 
		ws.close();
	window.location.href = '/timeoutText.htm';
	//window.location.href = '/session-expired.htm';
	
	return; 
													
													
	
	
	timeoutText.innerHTML = '<h1>Si cette écran apparaît, c’est qu’il y a un soucis qui empêche la visualisation en streaming.</h1>' +
	'<h1>2 raisons possibles :</h1>' +
	'<p>1. Vous êtes connecté par le réseau de votre entreprise (votre service informatique doit autoriser l’accès au protocole UDP).\n' +
	'<br>En attendant vous pouvez faire un partage de connexion avec votre mobile en 4G</p>' +
	'<p>2.  Vous êtes connecté en 4G ou en wifi avec votre device (mobile, tablette).\n' +
	'  Essayez avec un autre appareil.<br>Notre équipe technique fait au plus vite pour rétablir le service.</p>'
	
	 
	timeoutText.innerHTML = '<h1>If this screen appears, it is because there is a problem preventing streaming viewing</h1>' +
	'<h1>2 possible reasons</h1>' +
	'<p>1. You are connected by your company network (your IT department must authorize access to the UDP protocol).\n' +
	'<br>In the meantime you can share a connection with your mobile in 4G</p>' +
	'<p>2.  You are connected in 4G or wifi with your device (mobile, tablet).\n' +
	'  Try another device.<br>technical team is working quickly to restore service.</p>' 
	
	
	timeoutText.innerHTML = '<h1>If this screen appears, it is because there is a problem preventing streaming viewing</h1>' +
	'<h1>Possible reason:</h1>' +
    
	'<p>1. On server side, most probably turn server not running. so webRtc failed to stream video.  \n' +
	'  Contarct technical team to check turn server settings.</p>' 
	*/
}

var failedAttmept = false;

var href = location.href;






// console.log(" res[0]: "+username);

let urlParams = new URLSearchParams(window.location.search);



var tt = urlParams.get("appName");

function updateRunningMachineslist(msg) {
  var RunningMachinesfilter = document.getElementById("RunningMachines-filter");
  if (RunningMachinesfilter) {
    RunningMachinesfilter.innerHTML = "";

    for (var i = 0; i < msg.RuiningCirrusServers.length; i++) {
      var efsf = msg.RuiningCirrusServers[i];

      var option = document.createElement("option");
      option.text = option.value = efsf.domain + ":" + efsf.httpsPort;
      RunningMachinesfilter.add(option, i);
    }
  }
}

function sortSelect(selElem) {
  var tmpAry = new Array();
  for (var i = 0; i < selElem.options.length; i++) {
    tmpAry[i] = new Array();
    tmpAry[i][0] = selElem.options[i].text;
    tmpAry[i][1] = selElem.options[i].value;
  }
  tmpAry.sort();
  while (selElem.options.length > 0) {
    selElem.options[0] = null;
  }
  for (var i = 0; i < tmpAry.length; i++) {
    var op = new Option(tmpAry[i][0], tmpAry[i][1]);
    selElem.options[i] = op;
  }
  return;
}



function RemoveFromControlPanelPlayers(msg) {
  //if(msg.owner!=username)
  //	return
  var fsfsf = msg.domain + ":" + msg.httpsPort;

  var RunningMachinesfilter = document.getElementById("RunningMachines-filter");

  if (RunningMachinesfilter) {
    for (i = 0; i < RunningMachinesfilter.length; i++) {
      if (RunningMachinesfilter.options[i].value == fsfsf) {
        RunningMachinesfilter.remove(i);
      }
    }

    // sortSelect(RunningMachinesfilter)
  }
}


const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}


function formatBytes22(bytes, decimals, binaryUnits) {
    if(bytes == 0) {
        return '0 Bytes';
    }
    var unitMultiple = (binaryUnits) ? 1024 : 1000; 
    var unitNames = (unitMultiple === 1024) ? // 1000 bytes in 1 Kilobyte (KB) or 1024 bytes for the binary version (KiB)
        ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']: 
        ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var unitChanges = Math.floor(Math.log(bytes) / Math.log(unitMultiple));
    return parseFloat((bytes / Math.pow(unitMultiple, unitChanges)).toFixed(decimals || 0)) + ' ' + unitNames[unitChanges];
}

var totalSizeOfAllApps=0
function calculateTotalSizeTakenByAllApps(msg) 
{
	if(config.Upload_system==4) 
		{
			calculateTotalSizeTakenByAllAppsForUpload_system4(msg);
			return
		}
	var gcsApps= msg.apps.gcsApps
		
		for ( i=0;i<gcsApps.length;i++)
		{
               var app=gcsApps[i]
			   
			   var versions=  app.versions
				
				for ( j=0;j<versions.length;j++)
				{
					var versioninfo = versions[j];
					//var dsfsf=formatBytes(versioninfo.size,10)
					totalSizeOfAllApps=totalSizeOfAllApps+Number(versioninfo.size)
					
					//console.log("1111 versioninfo.size: " + versioninfo.size );	
					//console.log("1111 totalSizeOfAllApps: " + totalSizeOfAllApps );	
					
					  
				}

		}

	
	console.log("totalSizeOfAllApps: " + formatBytes(totalSizeOfAllApps, 2, true));	
}

function calculateTotalSizeTakenByAllAppsForUpload_system4(msg) 
{
	
	var gcsApps= msg.apps.data.blobs
		
		for ( i=0;i<gcsApps.length;i++)
		{
               var app=gcsApps[i]
			   
			   var versions=  app.files
				
				for ( j=0;j<versions.length;j++)
				{
					var versioninfo = versions[j];
					//var dsfsf=formatBytes(versioninfo.contentLength,10)
					totalSizeOfAllApps=totalSizeOfAllApps+Number(versioninfo.contentLength)
					
					//console.log("1111 versioninfo.size: " + versioninfo.contentLength );	
					//console.log("1111 totalSizeOfAllApps: " + totalSizeOfAllApps );	
					
					  
				}

		}

	
	console.log("totalSizeOfAllApps: " + formatBytes(totalSizeOfAllApps, 2, true));	
}



function prepareAppslist(msg) 
{
	var apps=[]
	
	var gcsApps= msg.apps.gcsApps
		
		for ( i=0;i<gcsApps.length;i++)
		{
               var app=gcsApps[i]
			   
			   
			   var efsf = app.name;
			   
			   var awsApps= msg.apps.awsApps
			   
			   
			   var fsfsfsf=awsApps[efsf]
			   if(fsfsfsf !=undefined)
			   {
					//console.log(JSON.stringify(fsfsfsf))
					for ( J=0;J<fsfsfsf.length;J++)
						{
							//console.log(fsfsfsf[J])
							
							var obj={
									  "source": "oldAwsUploads",
									  
									  "version": fsfsfsf[J]
									}
							app.versions.push(obj)
						}
			   
			   }
			   //console.log(awsApps.get(efsf))
			   
			   apps.push(app)
			  
		}  
		
		
	 var awsApps= msg.apps.awsApps		
	for (let field of Object.keys(awsApps)) 
	{
		var found=false
		
		 for ( i=0;i<gcsApps.length;i++)
			{
				  if(field == gcsApps[i] .name)
				  {
					  found=true
					  break
				  }
				   
				
			}
			
			if(!found)
			{
				var obj= {}
				var fsfsfsf=awsApps[field]
				var versions=[]
				for ( J=0;J<fsfsfsf.length;J++)
							{
								var obj22={
										  "source": "oldAwsUploads",
										  
										  "version": fsfsfsf[J]
										}
								versions.push(obj22)
										
							}
							
							
				
								
				obj.name= field
				obj.versions=versions				
				apps.push(obj)	
				
			}
			
	  
	  
	}

		
		
	console.log(JSON.stringify(apps))
	
	return apps
}

function updateAppslistForS3(msg) {
  if (msg.apps.length <= 0) return;
  var Appsfilter = document.getElementById("Apps-filter");
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.apps.length; i++) {
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }

    onAppChange();
  }
}


function updateAppslist(msg) 
{
	calculateTotalSizeTakenByAllApps(msg)
	var apps=prepareAppslist(msg) 
	
  if (apps.length <= 0) 
	  return;
  var Appsfilter = document.getElementById("Apps-filter");
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
	
	 
	
		
		for ( i=0;i<apps.length;i++)
		{
               var app=apps[i]
			   
			   
			   var efsf = app.name;
			   
			   var option = document.createElement("option");
			   option.value =JSON.stringify(app)
			   
			  option.text  = efsf;
			  Appsfilter.add(option, i);
			  
		}  
  
	
	
   /* for (var i = 0; i < msg.apps.length; i++) 
	{
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }*/

    onAppChange();
  }
}

function updateServerAppslistForUpload_system4(msg) 
{
	
	var apps=msg.apps.data.blobs
	
  if (apps.length <= 0) 
	  return;
  var Appsfilter = document.getElementById("ServerApps-filter");
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
	
	 
	
		
		for ( i=0;i<apps.length;i++)
		{
               var app=apps[i]
			   
			   var fsgsgs=app.name.split("/")
			   var efsf = fsgsgs[fsgsgs.length-1];
			   
			   var option = document.createElement("option");
			   option.value =JSON.stringify(app)
			   
			  option.text  = efsf;
			  Appsfilter.add(option, i);
			  
		}  
  
	
	
   /* for (var i = 0; i < msg.apps.length; i++) 
	{
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }*/

    //onAppChange();
  }
}



function updateAppslistForUpload_system4(msg) 
{
	calculateTotalSizeTakenByAllApps(msg)
	var apps=msg.apps.data.blobs
	
  if (apps.length <= 0) 
	  return;
  var Appsfilter = document.getElementById("Apps-filter");
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
	
	 
	
		
		for ( i=0;i<apps.length;i++)
		{
               var app=apps[i]
			   
			   
			   var efsf = app.name.split("/")[1];
			   
			   var option = document.createElement("option");
			   option.value =JSON.stringify(app)
			   
			  option.text  = efsf;
			  Appsfilter.add(option, i);
			  
		}  
  
	
	
   /* for (var i = 0; i < msg.apps.length; i++) 
	{
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }*/

    onAppChange();
  }
}


function updateServerAppslistFromS3Data(msg) 
{
  if (msg.apps.length <= 0) return;
  var Appsfilter = document.getElementById("ServerApps-filter");
  if (Appsfilter) 
  {
    //Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.apps.length; i++) {
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }

    
  }
}

function updateServerAppslist(msg) 
{
	updateServerAppslistForUpload_system4(msg) 
	return
  if (msg.data.blobs <= 0) return;
  var Appsfilter = document.getElementById("ServerApps-filter");
  if (Appsfilter) 
  {
    //Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.apps.length; i++) {
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }

    
  }
}

var iconSelect;

function load2dAsets(icons)
{

           /*  iconSelect = new IconSelect("my-icon-select", 
                {'selectedIconWidth':150,
                'selectedIconHeight':150,
                'selectedBoxPadding':1,
                'iconsWidth':50,
                'iconsHeight':50,
                'boxIconSpace':1,
                'vectoralIconNumber':2,
                'horizontalIconNumber':6});
 
             iconSelect = new IconSelect("my-icon-select", 
                {'selectedIconWidth':23,
                'selectedIconHeight':23,
                'selectedBoxPadding':1,
                'iconsWidth':48,
                'iconsHeight':48,
                'boxIconSpace':1,
                'vectoralIconNumber':2,
                'horizontalIconNumber':6});
				*/
				
				  iconSelect = new IconSelect("my-icon-select", 
                {'selectedIconWidth':50,
                'selectedIconHeight':50,
                'selectedBoxPadding':1,
                'iconsWidth':48,
                'iconsHeight':48,
                'boxIconSpace':1,
                'vectoralIconNumber':1,
                'horizontalIconNumber':1});
				
            
            iconSelect.refresh(icons);

 };
		
function updateAll2dAssetsUrls1111(msg) {
  if (msg.apps.length <= 0) 
	  return;
  
    var icons = [];
   for (var i = 0; i < msg.apps.length; i++) {
      var efsf = msg.apps[i];

     icons.push({'iconFilePath':efsf, 'iconValue':i+1});
    }
	
 
   
  // icons.push({'iconFilePath':'https://test-upload-app.s3.amazonaws.com/demo/Assets2D/Untitled.jpg', 'iconValue':'1'});
   //         icons.push({'iconFilePath':'https://test-upload-app.s3.amazonaws.com/demo/Assets2D/18cb5992aadfa3cca0a130fe19783f647478517e-1.jpg', 'iconValue':'2'});
            
            
			
 load2dAsets(icons)
}

function updateAll2dAssetsUrls(msg) {
	
	if
	(
		(msg.apps.data.blobs.length<=0)
		||
		(msg.apps.data.blobs[0].files.length<=0)
	)
		return
	var assets=msg.apps.data.blobs[0].files
	
  if (assets <= 0) 
	  return;
  
    var icons = [];
   for (var i = 0; i < assets.length; i++) {
      var efsf = assets[i].url;

     icons.push({'iconFilePath':efsf, 'iconValue':i+1});
    }
	
 
   
  // icons.push({'iconFilePath':'https://test-upload-app.s3.amazonaws.com/demo/Assets2D/Untitled.jpg', 'iconValue':'1'});
   //         icons.push({'iconFilePath':'https://test-upload-app.s3.amazonaws.com/demo/Assets2D/18cb5992aadfa3cca0a130fe19783f647478517e-1.jpg', 'iconValue':'2'});
            
            
			
 load2dAsets(icons)
}




	
function updateAllVideoAssetsUrls111(msg) {
  if (msg.apps.length <= 0) return;
  var Appsfilter = document.getElementById("VideoAssets-filter");
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.apps.length; i++) {
      var efsf = msg.apps[i];

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }

   
  }
}
	
	
function updateAllVideoAssetsUrls(msg) {
	
	if
	(
		(msg.apps.data.blobs.length<=0)
		||
		(msg.apps.data.blobs[0].files.length<=0)
	)
		return
			
	
	var assets=msg.apps.data.blobs[0].files
  if (assets.length <= 0) return;
  var Appsfilter = document.getElementById("VideoAssets-filter");
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
    for (var i = 0; i < assets.length; i++) {
      var efsf = assets[i].url;

      var option = document.createElement("option");
      option.text = option.value = efsf;
      Appsfilter.add(option, i);
    }

   
  }
}
		
	


function DeleteSelectedSchedule() {
  var ScheduledEventsfilter = document.getElementById("ScheduledEvents-filter");
  var valueScheduledEventsfilter =
    ScheduledEventsfilter.options[ScheduledEventsfilter.selectedIndex].value;
  var textScheduledEventsfilter =
    ScheduledEventsfilter.options[ScheduledEventsfilter.selectedIndex].text;

  console.log("ScheduledEvents text22: " + textScheduledEventsfilter);
  console.log("ScheduledEvents value: " + valueScheduledEventsfilter);

  var dgsgsg = JSON.stringify({
    type: "DeleteSelectedSchedule",
    docData: valueScheduledEventsfilter,
    text: textScheduledEventsfilter,
    owner: username,
  });

  ws.send(dgsgsg);
}
var SelectedAppConfigIndex=undefined

function onVideoAssetsChange()
{
var e = document.getElementById("VideoAssets-filter");
		var app_text22 = e.options[e.selectedIndex].text;
		document.getElementById("VideoURL2play").value=app_text22 
}	
var currentSelectedConfigObj=undefined
var currentSelectedConfig=undefined
  var isNewUnsavedConfig=false
  
function loadSelectedAppConfig(ConfigName_value) 
{
	
 
  

  
  console.log("loadSelectedAppConfig() ConfigName_value: "+ConfigName_value)
  let config =undefined

  if
  (
	  (ConfigName_value==undefined)
	  
	  ||
	  (ConfigName_value=="undefined")
  )
  {
	 config={


	"isAdminDebugging": "0",
	"useExtendedTyping": "0",
	"isVrApp": "0",
	"platform": "StreamingApp",
	"TurnServer": "0",
	"showbrowserMouse": "1",
	"ShouldAutoPlay": "0",  
	"PreventPixalizationByCompromisingResolution": "0",  
	"resolutionType_ue4": "720p",
	"ResulationX_ue4": "1280",
	"ResulationY_ue4": "720",
	"ShouldUseCdn": "0",
	"fakeMouseWithTouches": "0",
	
	
	//"isE3DSEngineApp": "0",
	"showWebrtcCtrlMenu": "0",
	"showPsControl": "0",
	"isAfkEnabled": "1",
	"LunchMostRecentAlreadyAvailable": "0",
	"doForceReDownload": "0",
	"enableScreenshot": "1",
	"enableRuntimeNotifications": "1",
	"shouldInjectCmdlines": "1",
	"shouldDisplayContorlBar": "1",
	"ForceLandScapeMode": "0",
	"DoRandomSuffleInLoadingVideoAssets": "0",
	"shouldAppendOveridingcmdLineArgs": "0",
	"afkCloseTimeout": "1",
	"afkWarnTimeout": "5",
	"useVOIP": "0",
	"voipRoomName": "",
	"passwordToStart": "",
	"suppressBrowserKeys": "0",

	
	
	"audioType": "stereo",
	"MouseControlScheme": "1",
	"expireOn": "900000",
	"audioMaxAverageBitrate": "128000",
	//"exeLunchArgs": "-ResX=1280  -ResY=720",
	//"videoToPlay": "https://eagle3dstreaming-build-upload-1.s3.amazonaws.com/0.extras/demo1.mp4",
	"systemVersion": "",
	
	"exeLunchArgs": "",
	"qualityLevel": "",
	"quality": "",
	"minBitrate": "",
	"maxBitrate": "",
	"resolution": "",
	"rateCtrl": "",
	"BGI4Queue": "",
	"BGI": "",
	"LoadingImg": "",
	"PlayBtn": "",
	"Logo": "",
	"TitleBarIcon": ""
	
	
	
	 }

		//isNewUnsavedConfig=true	 
  }
  else
  {
    config = JSON.parse(ConfigName_value);
  
  
  }
  
   currentSelectedConfigObj=config
  
    document.getElementById("MouseControlScheme-Filter").selectedIndex=config.MouseControlScheme
	
	
    //document.getElementById("TurnServerFilter").selectedIndex=config.TurnServer
    
	
	if(config.TurnServer !=undefined)
		document.getElementById("TurnServerFilter").value=config.TurnServer
	
	if(config.StreamerTurnServerMode !=undefined)
		document.getElementById("StreamerTurnServerFilter").value=config.StreamerTurnServerMode

	if(config.EmulatedGeoLocationInfo !=undefined)
	{
		document.getElementById("emulatedLongitude").value=config.EmulatedGeoLocationInfo.longitude
		document.getElementById("emulatedLatitude").value=config.EmulatedGeoLocationInfo.latitude
	
	}
	else
	{
		document.getElementById("emulatedLongitude").value=""
		document.getElementById("emulatedLatitude").value=""
	
	}
    //document.getElementById("VideoURL2play").value=config.videoToPlay
	
	var videos = new Array();
	if(config.loadingVideoList !=undefined)
	{
		videos=config.loadingVideoList
		
	}
	else
	{
		if
			((config.videoToPlay !=undefined)
			&&
			(config.videoToPlay !="")
			&&
			(config.videoToPlay !="undefined")
			)
				videos.push(config.videoToPlay)
	}
	
		var loadingVideoList = document.getElementById("loadingVideoList");
		loadingVideoList.innerHTML =""
		for (var i = 0; i < videos.length; i++) 
		{
		    var option = document.createElement("option");
			option.text = option.value =  videos[i];
			 loadingVideoList.append(option);
		}
	
	
	if(config.streamingPrority != undefined)		
		document.getElementById("streamingProrityFilter").value=config.streamingPrority
	else 
		document.getElementById("streamingProrityFilter").value="FasterConnection"
		
	
    document.getElementById("audioType-Filter").value=config.audioType
    document.getElementById("audioMaxAverageBitrate").value=config.audioMaxAverageBitrate
	
		var fsgsgsdsfs=""
		
		if
		(
			(config.exeLunchArgs != "")
			&&
			(config.exeLunchArgs != "undefined")
			&&
			(config.exeLunchArgs != undefined)
		)
		{
			var fsfsg=config.exeLunchArgs.split(' ')
			
			 
			//for(i=3;i<fsfsg.length;i++)
			for(i=0;i<fsfsg.length;i++)
			{
				if(fsgsgsdsfs=="")
					fsgsgsdsfs=fsfsg[i]
				else
					fsgsgsdsfs=fsgsgsdsfs+" "+fsfsg[i]
				
			}
		}
	
	document.getElementById("CmdLineParameters").value=fsgsgsdsfs
	
	  if((config.shouldAppendOveridingcmdLineArgs != undefined))
			document.getElementById("shouldAppendOveridingcmdLineArgs").checked=(config.shouldAppendOveridingcmdLineArgs==1) 
		else
			document.getElementById("shouldAppendOveridingcmdLineArgs").checked=false
		
	   if((config.doForceReDownload != undefined))
			document.getElementById("doForceReDownload").checked=(config.doForceReDownload==1) 
		else
			document.getElementById("doForceReDownload").checked=false
	 
	 if((config.shouldInjectCmdlines != undefined))
			document.getElementById("shouldInjectCmdlines").checked=(config.shouldInjectCmdlines==1) 
		else
			document.getElementById("shouldInjectCmdlines").checked=true
	
	if(config.developersEmail  != undefined)
		document.getElementById("developersEmail").value=config.developersEmail
	else
		document.getElementById("developersEmail").value=""
	
	
	
	
	
	
	
	var ExpireTime=config.expireOn
	if
	(
		(ExpireTime != undefined)
		&&
		(ExpireTime != "undefined")
	    &&
		(ExpireTime != "Invalid Date")
		
	)
	{
		
		if(ExpireTime.endsWith("minutes"))
		{
			ExpireTime = ExpireTime.split("minutes")[0];
		}
		else
		{
			ExpireTime=config.expireOn
			  var parsed = parseFloat(ExpireTime);
				/* if (!Number.isNaN(parsed))
					ExpireTime=1  //??? why it detects 900000 as not numt numbver
				else
				{ */
					ExpireTime=parsed/(60*1000)
				//}
				
		}
		
		document.getElementById("ExpireTime").value=ExpireTime
		
	}
	
	 if
	 (
		(config.urlExpiretime != "")
		&&
		(config.urlExpiretime != undefined)
		&&
		(config.urlExpiretime != "undefined")
	    &&
		(config.urlExpiretime != "Invalid Date")
	 )
	 {
		//console.log(`config.urlExpiretime: `+config.urlExpiretime);
		var sfsf=new Date(config.urlExpiretime).toISOString().slice(0,16) 
		document.getElementById("urlExpiretime").value=sfsf
	 }
	 else
		 document.getElementById("urlExpiretime").value=""
	
    /*document.getElementById("qualityLevel-Filter").value=config.qualityLevel
     document.getElementById("quality").value=config.quality
    document.getElementById("minBitrate").value=config.minBitrate
    document.getElementById("maxBitrate").value=config.maxBitrate
    document.getElementById("resolution").value=config.resolution
    document.getElementById("rateCtrl").value=config.rateCtrl */
	
	
	var fsfsf=document.getElementById("resolutionFilter").options[0].value
	
	if(
		(config.resolutionType_ue4 == undefined)
		||
		(config.resolutionType_ue4 == "") 
	  )
		//document.getElementById("resolutionFilter").selectedIndex=0
		document.getElementById("resolutionFilter").value=fsfsf;
	else
		document.getElementById("resolutionFilter").value=config.resolutionType_ue4
	
	
	document.getElementById("ResulationX_ue4").disabled=false
	document.getElementById("ResulationY_ue4").disabled=false

	
	setResulationUI()
   
    //document.getElementById("isE3DSEngineApp").checked=   (config.isE3DSEngineApp==1) 
	//onIsE3DSEngineAppChange(document.getElementById("isE3DSEngineApp"))


    document.getElementById("shouldDownloadUE4LogOnCLientSide").checked=   (config.shouldDownloadUE4LogOnClientSide==1) 
    document.getElementById("shouldDebugUE4").checked=   (config.shouldDebugUE4==1) 
    document.getElementById("isAdminDebugging").checked=   (config.isAdminDebugging==1) 
    document.getElementById("showPsControl").checked=   (config.showPsControl==1) 

    
		if((config.showWebrtcCtrlMenu != undefined))
		    document.getElementById("showWebrtcCtrlMenu").checked=   (config.showWebrtcCtrlMenu==1) 
		else
			document.getElementById("showWebrtcCtrlMenu").checked=false
 
	
		if((config.afkWarnTimeout != undefined))
			document.getElementById("afkWarnTimeout").value=config.afkWarnTimeout
		else
			document.getElementById("afkWarnTimeout").value=5
 
 
 	if((config.afkCloseTimeout != undefined))
			document.getElementById("afkCloseTimeout").value=config.afkCloseTimeout
		else
			document.getElementById("afkCloseTimeout").value=1
 
  if((config.isAfkEnabled != undefined))
			document.getElementById("isAfkEnabled").checked=(config.isAfkEnabled==1) 
		else
			document.getElementById("isAfkEnabled").checked=true 


		if((config.LunchMostRecentAlreadyAvailable != undefined))
			document.getElementById("LunchMostRecentAlreadyAvailable").checked=(config.LunchMostRecentAlreadyAvailable==1) 
		else
			document.getElementById("LunchMostRecentAlreadyAvailable").checked=false
		
		if((config.enableRuntimeNotifications != undefined))
			document.getElementById("enableRuntimeNotifications").checked=(config.enableRuntimeNotifications==1) 
		else
			document.getElementById("enableRuntimeNotifications").checked=true
		
		
		if((config.shouldDisplayContorlBar != undefined))
			document.getElementById("shouldDisplayContorlBar").checked=(config.shouldDisplayContorlBar==1) 
		else
			document.getElementById("shouldDisplayContorlBar").checked=true
		
		
		if((config.ForceLandScapeMode != undefined))
			document.getElementById("ForceLandScapeMode").checked=(config.ForceLandScapeMode==1) 
		else
			document.getElementById("ForceLandScapeMode").checked=false 
		
		
  if((config.enableScreenshot != undefined))
			document.getElementById("enableScreenshot").checked=(config.enableScreenshot==1) 
		else
			document.getElementById("enableScreenshot").checked=true  
		
		
		if((config.DoRandomSuffleInLoadingVideoAssets != undefined))
			document.getElementById("DoRandomSuffleInLoadingVideoAssets").checked=(config.DoRandomSuffleInLoadingVideoAssets==1) 
		else
			document.getElementById("DoRandomSuffleInLoadingVideoAssets").checked=false
 

    document.getElementById("useVOIP").checked=   (config.useVOIP==1) 
	
	 if
	 (
		(config.voipRoomName != undefined)
		&&
		(config.voipRoomName != "undefined")
	    &&
		(config.voipRoomName != "")
	 )
		document.getElementById("voipRoomName").value=  config.voipRoomName
	 else
		 document.getElementById("voipRoomName").value=  ""	

	 if
	 (
		(config.passwordToStart != undefined)
		&&
		(config.passwordToStart != "undefined")
	    &&
		(config.passwordToStart != "")
	 )
		document.getElementById("passwordToStart").value=  config.passwordToStart
	 else
		 document.getElementById("passwordToStart").value=  ""
			
    document.getElementById("ShouldAutoPlay").checked=   (config.ShouldAutoPlay==1) 
	
	
	 if
	 ( 
		(config.PreventPixalizationByCompromisingResolution != undefined)
		&&
		(config.PreventPixalizationByCompromisingResolution != "undefined")
	    &&
		(config.PreventPixalizationByCompromisingResolution != "")
	 )
		document.getElementById("PreventPixalizationByCompromisingResolution").checked=   (config.PreventPixalizationByCompromisingResolution==1) 
	 else
		document.getElementById("PreventPixalizationByCompromisingResolution").checked=   false
	
    document.getElementById("ShouldUseCdn").checked=   (config.ShouldUseCdn==1) 

    document.getElementById("fakeMouseWithTouches").checked=   (config.fakeMouseWithTouches==1) 
    document.getElementById("suppressBrowserKeys").checked=   (config.suppressBrowserKeys==1) 
    document.getElementById("showbrowserMouse").checked=   (config.showbrowserMouse==1) 
    document.getElementById("useExtendedTyping").checked=   (config.useExtendedTyping==1) 
   // document.getElementById("isVrApp").checked=   (config.isVrApp==1) 
	
	if(config.platform != undefined)		
		document.getElementById("platformFilter").value=config.platform
	else 
		document.getElementById("platformFilter").value="StreamingApp"
	
	
   
	document.getElementById("preview_BGI4Queue").setAttribute('src',config.BGI4Queue)    
	document.getElementById("preview_BGI").setAttribute('src',config.BGI)   
	document.getElementById("preview_LoadingImg").setAttribute('src',config.LoadingImg)
	document.getElementById("preview_PlayBtn").setAttribute('src',config.PlayBtn)
	document.getElementById("preview_Logo").setAttribute('src',config.Logo)
	document.getElementById("preview_TitleBarIcon").setAttribute('src',config.TitleBarIcon)
	
	if(isNewUnsavedConfig)
	{
		isNewUnsavedConfig=false
		onclickSaveSelectedAppConfig()
		
		
	}
	
   return
  /*  e2.value = "banana";
  
    var e = document.getElementById("Apps-filter");
		  var app_value = e.options[e.selectedIndex].value;
		  var app_text22 = e.options[e.selectedIndex].text;

		  var e = document.getElementById("onDemandRegionsFilter");
		  var onDemandRegionsFilter32323 = e.options[e.selectedIndex].value;
		  var onDemandRegionsFilterfsfsfsf = e.options[e.selectedIndex].text;

		  var e = document.getElementById("CustomUISelctionFilter");
		  var CustomUISelctionFilter_value = e.options[e.selectedIndex].value;
		  var CustomUISelctionFilter_text22 = e.options[e.selectedIndex].text;

		 
		  var MouseControlScheme_value = e2.options[e2.selectedIndex].value;
		  var MouseControlScheme_text22 = e2.options[e2.selectedIndex].text;

		  var e3 = document.getElementById("TurnServerFilter");
		  var TurnServerFilter_value = e3.options[e3.selectedIndex].value;
		  var TurnServerFilter_text22 = e3.options[e3.selectedIndex].text;

		  var tttt11111 = document.getElementById("isAdminDebugging").checked ? "1" : "0";
(document.getElementById("showbrowserMouse").checked ? "1" : "0") +
			"&ShouldAutoPlay=" +
			(document.getElementById("ShouldAutoPlay").checked ? "1" : "0") +
			"&fakeMouseWithTouches=" +
			(document.getElementById("fakeMouseWithTouches").checked ? "1" : "0") +
			"&useExtendedTyping=" +
			(document.getElementById("useExtendedTyping").checked ? "1" : "0") +
			"&showPsControl=" +
			(document.getElementById("showPsControl").checked ? "1" : "0") +
		   // "&useVOIP=" +
		   // (document.getElementById("useVOIP").checked ? "1" : "0") +
			"&TurnServer=" +
			TurnServerFilter_value +
			
			"&useVOIP=" +
		   (document.getElementById("useVOIP").checked ? "1" : "0") +
			
			
			"&MouseControlScheme=" +
			MouseControlScheme_value +
			"&expireOn=" +
			document.getElementById("ExpireTime").value + //+"000"
			"&exeLunchArgs=" +
			"-ResX=" +
			document.getElementById("ResulationX").value +
			"%20-ResY=" +
			document.getElementById("ResulationY").value;

	 (document.getElementById("onDemand").checked */
}

function onIsE3DSEngineAppChange(cb) 
{

		document.getElementById("qualityLevel-Filter").disabled= !cb.checked
		document.getElementById("quality").disabled= !cb.checked
		document.getElementById("minBitrate").disabled= !cb.checked
		document.getElementById("maxBitrate").disabled= !cb.checked
		document.getElementById("resolution").disabled= !cb.checked
		document.getElementById("rateCtrl").disabled= !cb.checked
	
}
function appConfigLists(msg) {
  if (msg.data.length <= 0) 
	  return;
  var Appsfilter = document.getElementById("AppConfig-filter");
  
  var currentSelectedConfig_value=undefined
  if (Appsfilter) 
  {
    Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.data.length; i++) {
      var efsf = msg.data[i];
	  
	    if(efsf.id == "usersinfo")
			continue

      var option = document.createElement("option");
	  
	
		  
      option.text = efsf.id;
      option.value = JSON.stringify(efsf);
	  
	   if(currentSelectedConfig ==  efsf.id)
		 currentSelectedConfig_value=option.value
	 
      Appsfilter.add(option, i);
    }
  }
  
  var select2 = document.getElementById("AppConfig-filter2");
	//select2.innerHTML = select2.innerHTML+select1.innerHTML;
	select2.innerHTML = Appsfilter.innerHTML;
  
  
  console.log("loadSelectedAppConfig() currentSelectedConfig: "+currentSelectedConfig)
  console.log("loadSelectedAppConfig() SelectedAppConfigIndex: "+SelectedAppConfigIndex)
  if(currentSelectedConfig !=undefined)
  {
	//Appsfilter.selectedIndex=SelectedAppConfigIndex
	/* if(currentSelectedConfig_value==undefined)//than it was bcz of a delete cmd
			Appsfilter.selectedIndex=0
	else	 */	
		Appsfilter.value=currentSelectedConfig_value
	
  }
  else
  {
	Appsfilter.selectedIndex=0
	
	

  }
  
  doConfigLoadingFromApp_filter1()
}


function ScheduleTasks(msg) {
  if (msg.data.length <= 0) return;
  var Appsfilter = document.getElementById("ScheduledEvents-filter");
  if (Appsfilter) {
    Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.data.length; i++) {
      var efsf = msg.data[i];

      var option = document.createElement("option");
      option.text = efsf.StartDate;
      option.value = JSON.stringify(efsf);
      Appsfilter.add(option, i);
    }
  }
}

function takeAllOwnerList(msg) {
  if (msg.data.length <= 0) return;
  var Appsfilter = document.getElementById("OwnerListsFilter");
  if (Appsfilter) {
    // Appsfilter.innerHTML = "";
    for (var i = 0; i < msg.data.length; i++) {
      var efsf = msg.data[i];

      var option = document.createElement("option");
      option.text = efsf;
      option.value = option.text;
      Appsfilter.add(option, i);
    }
  }
}


function ComulativeAnalyticsData(msg) {
  if (msg.data.length <= 0) return;

  document.getElementById("myTable").style.visibility = "visible";
  document.getElementById("myTable").innerHTML = "";

  var StartDate4Analytics = new Date(
    document.getElementById("StartDate4Analytics").value
  ).toString();
  var EndDate4Analytics = new Date(
    document.getElementById("EndDate4Analytics").value
  ).toString();

  var from = new Date(StartDate4Analytics); // -1 because months are from 0 to 11
  var to = new Date(EndDate4Analytics);

  cn = 10;
  //Object.keys(obj).length
  var rowCount = 0;
  for (var r = 0; r < msg.data.length; r++) 
  {
    var obj = msg.data[r];

    if (isRangedAnalyticsData) 
	{
      if (!obj.hasOwnProperty("startTime")) 
	  {
        continue;
      }

      var check = new Date(obj.startTime);
      if (check > from && check < to) 
	  {
      } 
	  else 
		  continue;
    }

    var x = document.getElementById("myTable").insertRow(rowCount);
    rowCount++;
    var values = Object.values(obj);

    for (var c = 0; c < cn; c++) 
	{
      var y = x.insertCell(c);
      switch (c) 
	  {
        case 0:
          y.innerHTML = obj.deviceType;
          break;
        case 1:
          y.innerHTML = obj.os;
          break;
        case 2:
          y.innerHTML = obj.browser;
          break;

        case 3:
          if (obj.hasOwnProperty("UsedTime")) y.innerHTML = obj.UsedTime;
          else y.innerHTML = "Dropped";
          break;

        case 4:
          if (obj.hasOwnProperty("city")) y.innerHTML = obj.city;
          else y.innerHTML = "null";
          break;

        case 5:
          if (obj.hasOwnProperty("country_name"))
            y.innerHTML = obj.country_name;
          else y.innerHTML = "null";

          break;

        case 6:
          if (obj.hasOwnProperty("appName")) {
            var sfsf = obj.appName;

            //console.log(" appName: "+sfsf);
            if (obj.hasOwnProperty("appVersion"))
              sfsf = sfsf + " V." + obj.appVersion;

            y.innerHTML = sfsf;
          } else y.innerHTML = "null";

          break;

        case 7:
          if (obj.hasOwnProperty("startTime")) {
            var d1 = new Date(obj.startTime);
            y.innerHTML = d1.toUTCString();
          } else y.innerHTML = "null";
          break;

        case 8:
          if (obj.hasOwnProperty("DisconnectTime")) {
            var d1 = new Date(obj.DisconnectTime);
            y.innerHTML = d1.toUTCString();
          } else y.innerHTML = "";
          break;
		  
		 case 9:
             y.innerHTML = obj.owner;
          break;
      }

      // y.innerHTML= values[c]  //"Row-"+r+" Column-"+c;

      //console.log(c+` : ` +  y.innerHTML);
    }
  }
  
  console.log(" ComulativeAnalyticsData rowCount: "+rowCount);
}


function analyticsData(msg) {
	 console.log(" analyticsData totalStremaingTime: "+ msg.totalStremaingTime);
	 
	 e3ds_alert("totalStremaingTime: "+ msg.totalStremaingTime ,{ color: 'Blue'});
	 
  if (msg.data.length <= 0) return;

  document.getElementById("myTable").style.visibility = "visible";
  document.getElementById("myTable").innerHTML = "";

  var StartDate4Analytics = new Date(
    document.getElementById("StartDate4Analytics").value
  ).toString();
  var EndDate4Analytics = new Date(
    document.getElementById("EndDate4Analytics").value
  ).toString();

  var from = new Date(StartDate4Analytics); // -1 because months are from 0 to 11
  var to = new Date(EndDate4Analytics);

  cn = 9;
  //Object.keys(obj).length
  var rowCount = 0;
  for (var r = 0; r < msg.data.length; r++) {
    var obj = msg.data[r];

    if (isRangedAnalyticsData) {
      if (!obj.hasOwnProperty("startTime")) {
        continue;
      }

      var check = new Date(obj.startTime);
      if (check > from && check < to) {
      } else continue;
    }

    var x = document.getElementById("myTable").insertRow(rowCount);
    rowCount++;
    var values = Object.values(obj);

    for (var c = 0; c < cn; c++) {
      var y = x.insertCell(c);
      switch (c) {
        case 0:
          y.innerHTML = obj.deviceType;
          break;
        case 1:
          y.innerHTML = obj.os;
          break;
        case 2:
          y.innerHTML = obj.browser;
          break;

        case 3:
          if (obj.hasOwnProperty("UsedTime")) y.innerHTML = obj.UsedTime;
          else y.innerHTML = "Dropped";
          break;

        case 4:
          if (obj.hasOwnProperty("city")) y.innerHTML = obj.city;
          else y.innerHTML = "null";
          break;

        case 5:
          if (obj.hasOwnProperty("country_name"))
            y.innerHTML = obj.country_name;
          else y.innerHTML = "null";

          break;

        case 6:
          if (obj.hasOwnProperty("appName")) {
            var sfsf = obj.appName;

            //console.log(" appName: "+sfsf);
            if (obj.hasOwnProperty("appVersion"))
              sfsf = sfsf + " V." + obj.appVersion;

            y.innerHTML = sfsf;
          } else y.innerHTML = "null";

          break;

        case 7:
          if (obj.hasOwnProperty("startTime")) {
            var d1 = new Date(obj.startTime);
            y.innerHTML = d1.toUTCString();
          } else y.innerHTML = "null";
          break;

        case 8:
          if (obj.hasOwnProperty("DisconnectTime")) {
            var d1 = new Date(obj.DisconnectTime);
            y.innerHTML = d1.toUTCString();
          } else y.innerHTML = "";
          break;
      }

      // y.innerHTML= values[c]  //"Row-"+r+" Column-"+c;

      //console.log(c+` : ` +  y.innerHTML);
    }
  }


}

function onScheduledEventsSelected() {}
function onchange_Slider2AdjustRuiningMachine() {}

function oninput_Slider2AdjustRuiningMachine() {
  var slider = document.getElementById("Slider2AdjustRuiningMachine");

  var output2 = document.getElementById(
    "txt_Value_Slider2AdjustRuiningMachine"
  );
  output2.innerHTML = slider.value;
}

function connect() 
{
 

  var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  console.log(
    "-------11111111111111111---------- localTimeZone: " + localTimeZone
  );

  if (document.getElementById("TimeZone_text"))
    document.getElementById("TimeZone_text").innerHTML =
      "TimeZone: " + localTimeZone;

  ("use strict");

  if (failedAttmept) {
    //window.location.href ='/projectDoesNotExist.htm'  ;
    return;
  }

  window.WebSocket = window.WebSocket || window.MozWebSocket;

  if (!window.WebSocket) {
    alert("Your browser doesn't support WebSocket");
    return;
  }

  var ttt = window.location.href
    .replace("http://", "ws://")
    .replace("https://", "wss://");

  console.log("-------11111111111111111---------- ttt: " + ttt);

    //https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
	ttt=ttt.split('#')[0]
	//ttt="wss://cp_ms7.eaglepixelstreaming.com/demo/ControlPanel/6546532f2r542r7641762fu1r276r41f2162"
  ws = new WebSocket(ttt);

  ws.onmessage = function (event) {
    console.log(`<- SS: ${event.data}`);
    var msg = JSON.parse(event.data);
    //console.log(` SS message type: ${msg.type}`);

    if (msg.type === "ShowThisHtmlPage") {
      failedAttmept = true;
      ws.close();
      // window.location.href =msg.htmlPage  ;
    }
    if (msg.type === "doApprequest") {
      showTextOverlay("Intialzing..");
      console.log("doing doApprequest");

      var href = location.href;
      var trtrtr = href.replace(location.origin + "/", "");

      console.log(" href.replace(location.origin: " + trtrtr);

      var etetetet = trtrtr.replace(location.search, "");

      console.log(" href.replace(location.search: " + etetetet);

      let urlParams = new URLSearchParams(window.location.search);
      console.log("urlParams: " + urlParams);

      var tt = urlParams.get("appName");

      if (tt == null) {
        tt = "epicDemo";
        etetetet = "epicgames";
      }

      var dgsgsg = JSON.stringify({
        type: "appRequest",
        appName: tt,
        owner: etetetet,
        cmdLineArgs: urlParams.get("cmdLineArgs"),
      });

      console.log(" ws.send(): " + JSON.stringify(dgsgsg));
      //ws.send(dgsgsg);
    }
    if (msg.type === "redirectTo") {
      //https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
      // Simulate a mouse click:
      //window.location.href = msg.data.url;
      console.log("222222 <- SS: msg.data.url: " + msg.url);
      // Simulate an HTTP redirect:
      window.location.replace(msg.url);
    } else if (msg.type === "RemoveFromControlPanelPlayers") {
      RemoveFromControlPanelPlayers(msg);
    } else if (msg.type === "updateRunningMachineslist") {
      updateRunningMachineslist(msg);
    } else if (msg.type === "AddToRunningMachineslist") {
      AddToRunningMachineslist(msg);
    } 
	
	else if (msg.type === "updateDSAppInfoOnCP") {
      updateDSAppInfoOnCP(msg);
    }
	else if (msg.type === "RemoveFromDedicatedServerControlPanelPlayers") {
      RemoveFromDedicatedServerControlPanelPlayers(msg);
    }
	else if (msg.type === "updateRunningDedicatedServerMachineslist") {
      updateRunningDedicatedServerMachineslist(msg);
    } 
	
	else if (msg.type === "AddToRunningDedicatedServerMachineslist") {
      AddToRunningDedicatedServerMachineslist(msg);
    } 
	
	
	else if (msg.type === "ownedApps") {
		
		if(config.Upload_system==4) 
		{
			updateAppslistForUpload_system4(msg);
			
		}
		else
		{
				
			if (config.FS_system==2)
				updateAppslist(msg);
			else if(config.FS_system==1)
				updateAppslistForS3(msg);
		
		}
    } 
	else if (msg.type === "ownedServerApps") {
      updateServerAppslist(msg);
    } 
	else if (msg.type === "All2dAssetsUrls") {
      updateAll2dAssetsUrls(msg);
    } 	
	else if (msg.type === "showE3ds_alertOnClientSide") 
	{
		 e3ds_alert(msg.message ,{timeout: 2000, color: 'Blue'});
	}
	else if (msg.type === "AllVideoAssetsUrls") {
		
      updateAllVideoAssetsUrls(msg);
    } 
	else if (msg.type === "appConfigLists") {
		appConfigLists(msg)
	
    } else if (msg.type === "ScheduleTasks") {
      ScheduleTasks(msg);
    } else if (msg.type === "takeAllOwnerList") {
      takeAllOwnerList(msg);
    } 
	else if (msg.type === "ComulativeAnalyticsData") {
      ComulativeAnalyticsData(msg);
    }
	
	
	else if (msg.type === "analyticsData") {
      analyticsData(msg);
    } else if (msg.type === "MachineAllocationData4TheRegion") {
      var ApplyBtn4AllocateNewInstances = document.getElementById(
        "ApplyBtn4AllocateNewInstances"
      );
      if (ApplyBtn4AllocateNewInstances) {
        ApplyBtn4AllocateNewInstances.disabled = !msg.isMachineAllocationPossible;
      }
    } else if (msg.type === "ownedIDS") {
      var slider = document.getElementById("Slider2AdjustRuiningMachine");
      if (slider & isAdmin) {
        slider.max = msg.ids.length;
        slider.value = slider.max;
      //  if (isAdmin) slider.style.visibility = "visible";
        slider.disabled = false;
      }

      var output = document.getElementById(
        "txt_Value_Slider2AdjustRuiningMachine"
      );
      if (output) {
        output.innerHTML = slider.value;

        if (isAdmin) output.style.visibility = "visible";
        var output2 = document.getElementById(
          "txt_Value_Slider2AdjustRuiningMachine"
        );
        if (isAdmin) output2.style.visibility = "visible";
      }

      var ApplyBtn4MachineNumberAdjustment = document.getElementById(
        "ApplyBtn4MachineNumberAdjustment"
      );
      if (ApplyBtn4MachineNumberAdjustment) {
        var a = parseInt(msg.ids.length);
        if (a <= 0) ApplyBtn4MachineNumberAdjustment.disabled = true;
        else ApplyBtn4MachineNumberAdjustment.disabled = false;
      }

      var ApplyBtn4NumberOfUserPerVM = document.getElementById(
        "ApplyBtn4NumberOfUserPerVM"
      );
      if (ApplyBtn4NumberOfUserPerVM) {
        var a = parseInt(msg.ids.length);
        if (a <= 0) ApplyBtn4NumberOfUserPerVM.disabled = true;
        else ApplyBtn4NumberOfUserPerVM.disabled = false;
      }
    } else if (msg.type === "sendIntiazliztionRequest") 
	{
      var e22 = document.getElementById("RegionFilter4ExistingMachine");
      var value333 = e22.options[e22.selectedIndex].value;
      var text22333 = e22.options[e22.selectedIndex].text;

      console.log("Region text22: " + text22333);
      console.log("Region value: " + value333);

      var e = document.getElementById("InstanceType-filter");

      //if(!document.getElementById("InstanceType-filter"))
      //	e = document.getElementById("RegionFilter4ExistingMachine");

      var value = e.options[e.selectedIndex].value;
      var text22 = e.options[e.selectedIndex].text;

      console.log("InstanceType text22: " + text22);
      console.log("InstanceType value: " + value);

      var dgsgsg = JSON.stringify({
        type: "sendIntiazliztioninfo",
        owner: username,
        instanceType: value,
        region: value333,
      });   
	  
	

      console.log(" ws.send(): " + JSON.stringify(dgsgsg));
      ws.send(dgsgsg);
    } 
	else if (msg.type === "sendIdentity") 
	{
		  UseNginex = msg.UseNginex;
		  config = msg.config;
		  
		  
		  document.getElementById("VmLabel").value="client="+config.Ec2_ownerTagValue ;
		  
		  
		var  domianParts = window.location.hostname.split(".")//.reverse(); //.slice(0, -2).join('.');
		console.log(domianParts);//com
		var subDOmain=domianParts[0]
		console.log(domianParts.splice(0,1));//com
		console.log(domianParts);//com
		var topDOmain1 = domianParts.join(".");
		console.log("111111 topDOmain1: "+topDOmain1);//com
		console.log("111111 subDOmain: "+subDOmain);//com
		Upload_system=msg.config.Upload_system
		streamer_platform=msg.streamer_platform
		
		if(Upload_system==1)
			uploaderDomain= "http://upload."+topDOmain1+"/"
		
		else  if(Upload_system==2)
		//else  if(Upload_system==2)
		{
			if(topDOmain1 == "eaglepixelstreaming.com")
				uploaderDomain= "https://upload3.eagle3dstreaming.com/"
			else 
				uploaderDomain= "https://upload3."+topDOmain1+"/"
			
		}
		
		var topDOmain=msg.topLevelDomainName
		console.log(" 111111 topDOmain: "+topDOmain);//com
	 /*  domianParts = topDOmain.split(".")//.reverse(); //.slice(0, -2).join('.');
		console.log(domianParts);//com
		console.log(domianParts.splice(0,1));//com
		console.log(domianParts);//com
		 topDOmain2 = domianParts.join(".");
		console.log("topDOmain2: "+topDOmain2);//com */
		


		if(topDOmain1!=msg.topLevelDomainName)
			topDOmain=topDOmain1
			
			
			console.log("111111 topDOmain: "+topDOmain);//com
		
		  if (UseNginex) 
		  {
			//fileServerUrl = "https://fs_prod"  +"."+topDOmain  + "/";
			fileServerUrl ="https://" + msg.fullSubDomainName +"."+topDOmain + ":" + msg.FS_httpsPort + "/";
			 //fileServerUrl = "https://" + msg.FS_DomainName +"."+msg.topLevelDomainName + "/"
			//fileServerUrl="https://"+msg.FS_DomainName +"."+topDOmain+":"+msg.FS_httpsPort+"/"
			//fileServerUrl = "https://fs_master.eagle3dstreaming.com:1990" + "/"
 //https:/uploader4.eaglepixelstreaming.com/azure/ironman/spiderman
			if(Upload_system==4)  
				fileServerUrl =
			   config.uploader4Url+"/"
			   //+config.cloudStorageSystem4StreamingApp+"/";
			   
			   
			mmlinkerUrl = "https://" + msg.MML_domainName +"."+topDOmain+ "/";
			controlPanelServerUrl = "https://" + msg.CP_domainName +"."+topDOmain + "/";
		  } 
		  else 
		  {
			mmlinkerUrl =
			  "https://" +
			  topDOmain +
			  ":" +
			  msg.MML_matchmakerhttpsPort +
			  "/";
			controlPanelServerUrl =
			  "https://" +
			  topDOmain +
			  ":" +
			  msg.CP_matchmakerhttpsPort +
			  "/";

			fileServerUrl =
			  "https://" + topDOmain + ":" + msg.FS_httpsPort + "/";
			  
			  //fileServerUrl = "https://fs_master.eagle3dstreaming.com:1990" + "/"
		  }

		  console.log("111111 mmlinkerUrl: " + mmlinkerUrl);
		  console.log("111111 fileServerUrl: " + fileServerUrl);
		   onGettingSystemConfig(msg)
		   onGettingSubscriptionPackages(msg)
		  var dgsgsg = JSON.stringify({
			type: "takeIdentity",
			clientType: "controlpanel",
			isAdmin: isAdmin,
			owner: username,
		  });

      console.log(" ws.send(): " + JSON.stringify(dgsgsg));
      ahsanWsSend(dgsgsg);
    
	
	
	
	} 
	
	else if (msg.type === "UpdatePlayerWatingRank") {
      ShowInfoInLines("Wating Postion:", [msg.Postion]);
    } else if (msg.type === "ShowAnimatedInfo") {
      //console.log("222222 <- SS: msg.data.info: "+msg.data.info);
      restartAnimationText(msg.data.info);
    } else if (msg.type === "showTextOverlay") {
      //console.log("222222 <- SS: msg.data.info: "+msg.data.info);
      showTextOverlay(msg.data.info);
    } else if (msg.type === "ShowInfoInLines") {
      //console.log("222222 <- SS: msg.data.info: "+msg.data.info);
      //showTextOverlay(msg.data.info);
      ShowInfoInLines(msg.data.title, msg.data.info, msg.data.url);
      //clearTimeout(MapLoadingAnimationTimer);
      //startMapLoadingAnimation();
    }

    /* if (msg.type === 'config') {
			onConfig(msg);
		} else if (msg.type === 'playerCount') {
			updateKickButton(msg.count - 1);
		} else if (msg.type === 'answer') {
			onWebRtcAnswer(msg);
		} else if (msg.type === 'iceCandidate') {
			onWebRtcIce(msg.candidate);
		} else {
			console.log(`invalid SS message type: ${msg.type}`);
		}
		 */
  };

  ws.onerror = function (event) {
    console.log(`WS error: ${JSON.stringify(event)}`);
  };

  ws.onclose = function (event) {
    console.log(`WS closed: ${JSON.stringify(event.code)} - ${event.reason}`);
    ws = undefined;
    is_reconnection = true;

    // destroy `webRtcPlayerObj` if any
    let playerDiv = document.getElementById("player");
    if (webRtcPlayerObj) {
      playerDiv.removeChild(webRtcPlayerObj.video);
      webRtcPlayerObj.close();
      webRtcPlayerObj = undefined;
    }

    start();
  };
}
//connect()

// Config data received from WebRTC sender via the Cirrus web server
function onConfig(config) {
  return;
  let playerDiv = document.getElementById("player");
  let playerElement = setupWebRtcPlayer(playerDiv, config);
  resizePlayerStyle();

  switch (inputOptions.controlScheme) {
    case ControlSchemeType.HoveringMouse:
      registerHoveringMouseEvents(playerElement);
      break;
    case ControlSchemeType.LockedMouse:
      registerLockedMouseEvents(playerElement);
      break;
    default:
      console.log(
        `ERROR: Unknown control scheme ${inputOptions.controlScheme}`
      );
      registerLockedMouseEvents(playerElement);
      break;
  }
}

//Execute a JavaScript immediately after a page has been loaded:
window.onload = function load() 
{
  var fsgsg = new Date();
  var dgdg = fsgsg.toString(); // //local time


  var year = fsgsg.getFullYear(); //parseInt(dates[0])
  var month = fsgsg.getMonth() + 1; //parseInt(dates[1])-1 // in JavaScript - 0 - January, 11 - December.
  month = ("0" + month).slice(-2); //tunr 2 igit based only

  var day = fsgsg.getDate(); //parseInt(dates[2])
  day = ("0" + day).slice(-2); //tunr 2 igit based only
  var hour = fsgsg.getHours(); //parseInt(time[0])
  hour = ("0" + hour).slice(-2); //tunr 2 igit based only

  var minute = fsgsg.getMinutes(); //parseInt(time[1])
  minute = ("0" + minute).slice(-2); //tunr 2 igit based only
  var Seconds = fsgsg.getSeconds(); //parseInt(time[1])
  Seconds = ("0" + Seconds).slice(-2); //tunr 2 igit based only

  var nowsss = year + "-" + month + "-" + day + "T" + hour + ":" + minute;

 // console.log("111111111111  window.onload  " + nowsss);
  
  
  var now = new Date();
  //console.log("111111111111 now.getMinutes()  " + now.getMinutes());



//now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
now.setHours(0);

var gdgdgdg=now.toISOString().slice(0,16) 
document.getElementById('StartDate4Analytics').value =gdgdgdg ;


now = new Date();
now.setHours(24);
gdgdgdg=now.toISOString().slice(0,16) 
document.getElementById('EndDate4Analytics').value = gdgdgdg

checkAdminStatus()

  
};

var mobileDetect01;
function detectMobile() {}

function onGettingSystemConfig(msg) 
{
	
	var e22 = document.getElementById("RegionFilter4Allocator");
	var e1 = document.getElementById("RegionFilter4Allocator2");

	  e22.innerHTML = "";
	  e1.innerHTML = "";
	for (i = 0; i <msg.config.awsCloininiginfo.length; i++)
	{	
			
			var info=msg.config.awsCloininiginfo[i]
			var option = document.createElement("option");
			option.text = info.region 
			option.value = info.regionCode
			
			var option2 = document.createElement("option");
			option2.text = info.region 
			option2.value = info.regionCode
			
			e22.add(option, i);
			e1.add(option2, i);
		
			
		
	}
	
	
	
	 e22 = document.getElementById("TurnServerFilter");
	 e1 = document.getElementById("StreamerTurnServerFilter");
	

	// e22.innerHTML = "";
	  
	for (i = 0; i <msg.config.xirsysTurnServers.length; i++)
	{	
			
			var info=msg.config.xirsysTurnServers[i]
			var option = document.createElement("option");
			option.text = info.channleName 
			option.value = info.channleName
			
			
			
			var option2 = document.createElement("option");
			option2.text = info.channleName 
			option2.value = info.channleName
			
			
			e22.add(option, i);
			e1.add(option2, i);
			
		
			
		
	}
	
}


 function onnumStreamTimeChange() 
{
      console.log(`-> SS: numStreamTime`);
	  
	  var numCCU = document.getElementById("numStreamTime");
      var numCCUValue =
       numCCU.value;
	   if(numCCUValue == "")
	   {
		   document.getElementById("totalStreamTimeCost").innerHTML="Calculating. wait  plz";
		return
	   }
	   
	var sfsgsg=document.getElementById("numStreamTime").value*perMinuteStreamTimeCost.toFixed(2)
	sfsgsg=parseFloat(sfsgsg).toFixed(2)
	document.getElementById("totalStreamTimeCost").innerHTML="Total :"+sfsgsg

      
   };
   
 function onnumCCUChange() 
{
      console.log(`-> SS: numCCU`);
	  
	  var numCCU = document.getElementById("numCCU");
      var numCCUValue =
       numCCU.value;
	   
	document.getElementById("totalCost").innerHTML ="total : $"+numCCUValue*perCCUCost
      
   };  

function onsubscriptionPackagesfilterChnage()
{
	
	
	var AppVersionFilter = document.getElementById("subscriptionPackages-filter");
	
	if(AppVersionFilter.selectedIndex == -1)
		return
	setSubscriptionTo(AppVersionFilter,AppVersionFilter.selectedIndex)
	
}

var perMinuteStreamTimeCost=0.05
var perCCUCost=100
function setSubscriptionTo(AppVersionFilter,selectedIndex)
{
	
  var obj= JSON.parse(AppVersionFilter.options[selectedIndex].value)  
  if(document.getElementById("paymentPlan_hints"))	
	document.getElementById("paymentPlan_hints").innerHTML = obj.hint;

if(obj.name == "Trail")
{
	document.getElementById("numCCU").value=1
	document.getElementById("numCCU").disabled=true
	document.getElementById("totalCost").innerHTML="Total cost:0"
	document.getElementById("SubscriptionStartDate").disabled=true
	document.getElementById("SubscriptionEndDate").disabled=true	
	document.getElementById("SubscriptionStartDate").style.display = "block";
	document.getElementById("SubscriptionEndDate").style.display = "block";
	
	document.getElementById("Subscription_start_sec").style.display = "block";
	document.getElementById("Subscription_end_sec").style.display = "block";
	
	document.getElementById("numCCUSave").style.display = "none";
	document.getElementById("Subscription_StreamTime_sec").style.display = "none";
	document.getElementById("ShouldAutoRefillSec").style.display = "none";
}

if(obj.name == "CCU")
{
	document.getElementById("numCCU").value=5
	document.getElementById("numCCU").disabled=false
	document.getElementById("totalCost").innerHTML="Total :"+document.getElementById("numCCU").value*perCCUCost
	document.getElementById("SubscriptionStartDate").disabled=false
	document.getElementById("SubscriptionEndDate").disabled=false	
	document.getElementById("SubscriptionStartDate").style.display = "block";
	document.getElementById("SubscriptionEndDate").style.display = "block";
	
	document.getElementById("Subscription_start_sec").style.display = "block";
	document.getElementById("Subscription_end_sec").style.display = "block";
	
	document.getElementById("numCCUSave").style.display = "block";
	document.getElementById("Subscription_StreamTime_sec").style.display = "none";
	document.getElementById("ShouldAutoRefillSec").style.display = "none";
}


if(obj.name == "Pay-As-You-Go (PrePaid)")
{
	document.getElementById("numCCU").value=15
	document.getElementById("numCCU").disabled=true
	document.getElementById("totalCost").style.display = "none";
	document.getElementById("SubscriptionStartDate").disabled=false
	document.getElementById("SubscriptionEndDate").disabled=false	
	document.getElementById("numStreamTime").disabled=false	
	
	document.getElementById("Subscription_start_sec").style.display = "none";
	document.getElementById("Subscription_end_sec").style.display = "none";
	document.getElementById("ShouldAutoRefillSec").style.display = "block";
	
	document.getElementById("numCCUSave").style.display = "block";
	document.getElementById("Subscription_StreamTime_sec").style.display = "block";
	//document.getElementById("totalStreamTimeCost").innerHTML="Total :"+document.getElementById("numStreamTime").value*perMinuteStreamTimeCost
	onnumStreamTimeChange() 
}

if(obj.name == "Pay-As-You-Go (PostPaid)")
{
	document.getElementById("numCCU").value=15
	document.getElementById("numCCU").disabled=true
	document.getElementById("totalCost").style.display = "none";
	document.getElementById("SubscriptionStartDate").disabled=false
	document.getElementById("SubscriptionEndDate").disabled=true	
	
	document.getElementById("Subscription_start_sec").style.display = "block";
	document.getElementById("Subscription_end_sec").style.display = "none";
	
	document.getElementById("numCCUSave").style.display = "block";
	document.getElementById("Subscription_StreamTime_sec").style.display = "block";
	document.getElementById("numStreamTime").disabled = true;
	document.getElementById("ShouldAutoRefillSec").style.display = "none";
	if(streamTimeData!= undefined)
		document.getElementById("numStreamTime").value = streamTimeData.dataChannelTime;
	else
	{
		document.getElementById("numStreamTime").value = "";
			getStreamTimeInRangeOf();
	}
	//document.getElementById("totalStreamTimeCost").innerHTML="Total :"+document.getElementById("numStreamTime").value*perMinuteStreamTimeCost
	
	
	
	onnumStreamTimeChange() 
}


  var fsfsg=obj.SubscriptionStartDate
  if(fsfsg == undefined)
	return
if( document.getElementById("SubscriptionStartDate"))
	setValue( document.getElementById("SubscriptionStartDate"), obj.SubscriptionStartDate)

if( document.getElementById("SubscriptionEndDate"))
	setValue( document.getElementById("SubscriptionEndDate"), obj.SubscriptionEndDate)
	

	
		
}


var subscriptionPackages = [
  {
    "name": "Trail",
    "SubscriptionStartDate": "2020-01-05T17:18:00.000Z",
    "SubscriptionEndDate": "2021-01-12T17:18:00.000Z",
    "hint": "Enjoy 1 concurrent user (ccu) for 7 days starting from your registration date with Eagle 3D."
  },
  {
    "name": "CCU",
    "maxUserLimit": 100,
    "SubscriptionStartDate": "2010-01-05T17:18:00.000Z",
    "SubscriptionEndDate": "2013-01-12T17:18:00.000Z",
    "hint": "Make an upfront payment for unlimited streaming from the start date to the end date."
  },
  {
    "name": "Pay-As-You-Go (PrePaid)",
    "streamingTime": 100,
    "hint": "Make an advance payment and choose to auto-refill once the amount is finished."
  },
  {
    "name": "Pay-As-You-Go (PostPaid)",
    "streamingTime": 100,
    "hint": "Pay at the end of the month for the total amount of streaming time you have used throughout the month."
  }
];

	
	
function onGettingSubscriptionPackages(msg) 
{

	var AppVersionFilter = document.getElementById("subscriptionPackages-filter");
	

	  AppVersionFilter.innerHTML = "";
	 
	for (i = 0; i <msg.subscriptionPackages.length; i++)
	{	
			
			var info=msg.subscriptionPackages[i]
			 info=subscriptionPackages[i]//for rapid dev using this one--------vvv -disbale this line
			var option = document.createElement("option");
			option.text = info.name 
			option.value = JSON.stringify(info)
			
			
			
			AppVersionFilter.add(option, i);
			
		
			
		
	}
	
	 setSubscriptionTo(AppVersionFilter,0)
}



function initDetectMobile() {
  mobileDetect01 = new MobileDetect(window.navigator.userAgent);
}

function checkOrientationChange() {
  //Portrait
  if (window.innerHeight > window.innerWidth) {
    rotateOverlayElement.style.width = window.innerWidth.toString() + "px";
    rotateOverlayElement.style.height = window.innerHeight.toString() + "px";
    rotateOverlayElement.style.display = "block";
  }
  //Landscape
  else rotateOverlayElement.style.display = "none";
}

var virtualKeyboard;
var virtualKeyboardElem;
var keyboardLayouts = new Map();
function setReferences() {}

var inFullScreen = false;
var fullScreenInterval;
var fullScreenTimeout;
function checkForFullScreenResponse() {
  if (fullScreenResponseReceived) {
    if (!inFullScreen) {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
      screen.orientation.lock("landscape");
      inFullScreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
      inFullScreen = false;
    }
    clearInterval(fullScreenInterval);
    clearTimeout(fullScreenTimeout);
    fullScreenResponseReceived = false;
  }
}

var fullScreenResponseReceived = false;
function handleUnrealResponse(descriptor) {}

function bindToUnrealResponse() {
  addResponseEventListener("responseHandler01", handleUnrealResponse);
}

function onConnectionTimeOut() {
  /*
	enag this kes the page to reload on faliure which causes to try to aonnect another player with ss.
	which will cause to ask exe luncher to have to relunch cmd in parallel
	if (ws) 
		ws.close();
	window.location.href = '/timeoutText.htm';
	//window.location.href = '/session-expired.htm';
	
	return; 
		*/

  var timeoutText = document.createElement("div");
  timeoutText.id = "timeoutText";

  timeoutText.innerHTML =
    "<p>1. Turn server issue.   \n" +
    "plz  Contarct technical team to check turn server settings.</p>";

  setOverlay("cover", timeoutText);
}

function onKeyboardInputChange(input) {
  //remove tabs
  let newInput = input.replace("	", "");
  let descriptor = {
    keyboardInput: newInput,
  };
  emitUIInteraction(descriptor);
  virtualKeyboard.setInput(newInput);
}

function sendTrackerUpdate() {
  console.log("111111111111 sendTrackerUpdate ");
  //XMLHttpRequest (XHR) objects are used to interact with servers.
  // You can retrieve data from a URL
  // without having to do a full page refresh.

  // This enables a Web page to update just
  // part of a page
  // without disrupting what the user is doing.
  // XMLHttpRequest is used heavily in AJAX programming.

  const Http = new XMLHttpRequest();

  //The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
  //Calling this method for an already active request (one for which open() has already been called) is the equivalent of calling abort().
  Http.open("GET", "/update-tracker");

  //The XMLHttpRequest method send() sends the request to the server. If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.
  Http.send();
  //http://prod.XXXXXXX.com/api/v2/streaming/tracker/trackerId

  //http://prod.XXXXXXX.com/api/v2/streaming/tracker/eyJpdiI6ImJuRlJUWitJV25EOStJXC9HRnFxQnF3PT0iLCJ2YWx1ZSI6Iit3TEpPZXhGOFo2QlE0TDdZSWZWWGsyRGQwZFNtemxRenVJVmdzSFBXTVpKMEZ4TmxnZ0JCRlV2WXI4Rlo2ZXIiLCJtYWMiOiJiNGI5N2ZmYmU0YzdhZDAyOWQyY2VkNzg5NWViM2ZkMTRkZjcxOGYxZWVkZTRmMzQ2MmI1MzI2YWNjYjUyMzY2In0=
}

function setUpBackofficeTracking() {
  //The visibilitychange event is fired at the document when the content of its tab have become visible or have been hidden.
  document.addEventListener("visibilitychange", function () {
    console.log(
      "111111111111 document.visibilityStat: " + document.visibilityStat
    );
    if (document.visibilityState === "hidden") {
      setTimeout(function () {
        console.log("111111111111 location.reload(true) ");
        //reload(true) or .reload(false) is deprecated according to my IDE and
        //The parameter set to 'true' reloads a fresh copy from the server. Leaving it out will serve the page from cache.
        //at the beginning of your page with no other condition qualifying why that code runs, the page will load and then continue to reload itself until you close your browser.
        //location.reload(true); //The Location.reload() method reloads the current URL, like the Refresh button.
      }, 5000);
    }
  });
  sendTrackerUpdate();

  setInterval(
    function () {
      sendTrackerUpdate();
    },

    5000
  );
}

function initUnrealData() {}

var programId;
var lotNumber;
var token;
function getUrlParams() {
  //http://127.0.0.1:990/edgrdhgd?appName=DHP_Config_Desktop&version=2&cmdLineArgs=my_PlainText_inputs
  //?appName=DHP_Config_Desktop&version=2&cmdLineArgs=my_PlainText_inputs
  console.log("window.location.search => " + window.location.search);
  let urlParams = new URLSearchParams(window.location.search);
  for (var [key, value] of urlParams.entries()) {
    console.log(key + " => " + value);
  }

  console.log(`33333333333333 urlParams: ` + urlParams);
}

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};

function createTableForAllData() {
  isRangedAnalyticsData = false;
  var gfdsgdgd = JSON.stringify({
    type: "buildAnalyticsData2",
    StartDate4Analytics: new Date(
      document.getElementById("StartDate4Analytics").value
    ).toString(),
    EndDate4Analytics: new Date(
      document.getElementById("EndDate4Analytics").value
    ).toString(),

    owner: username,
  });

  console.log(" ws.send(): " + gfdsgdgd);

  ws.send(gfdsgdgd);
}

function createTableForDateRangedData() {
  isRangedAnalyticsData = true;
  var gfdsgdgd = JSON.stringify({
    type: "buildAnalyticsData2",
    StartDate4Analytics: new Date(
      document.getElementById("StartDate4Analytics").value
    ).toString(),
    EndDate4Analytics: new Date(
      document.getElementById("EndDate4Analytics").value
    ).toString(),

    owner: username,
  });

  console.log(" ws.send(): " + gfdsgdgd);

  ws.send(gfdsgdgd);
}


function createTableForComulativeDateRangedData() {
  isRangedAnalyticsData = true;
  var gfdsgdgd = JSON.stringify({
    type: "collectComulativeAnlyticsData",
    StartDate4Analytics: new Date(
      document.getElementById("StartDate4Analytics").value
    ).toString(),
    EndDate4Analytics: new Date(
      document.getElementById("EndDate4Analytics").value
    ).toString(),

    owner: username,
  });

  console.log(" ws.send(): " + gfdsgdgd);

  ws.send(gfdsgdgd);
}

//////////////////



let b0 = document.getElementById('b0');
if (b0 !== null) 
{
		b0.onclick = function (event) {
			document.getElementById("preview_TitleBarIcon").setAttribute('src',"")
	
		};
}


let b1 = document.getElementById('b1');
if (b1 !== null) 
{
		b1.onclick = function (event) {
			document.getElementById("preview_BGI").setAttribute('src',"")
		};
}


let b2 = document.getElementById('b2');
if (b2 !== null) 
{
		b2.onclick = function (event) {
			document.getElementById("preview_Logo").setAttribute('src',"")
		};
}
let b3 = document.getElementById('b3');
if (b3 !== null) 
{
		b3.onclick = function (event) {
			document.getElementById("preview_PlayBtn").setAttribute('src',"")
		};
}
let b4 = document.getElementById('b4');
if (b4 !== null) 
{
		b4.onclick = function (event) {
			document.getElementById("preview_LoadingImg").setAttribute('src',"")
		};
}
let b5 = document.getElementById('b5');
if (b5 !== null) 
{
		b5.onclick = function (event) {
			document.getElementById("preview_BGI4Queue").setAttribute('src',"")
		};
}
let b6 = document.getElementById('b6');
if (b6 !== null) 
{
		b6.onclick = function (event) {
			 onUseiFrameClicked(this);
		};
}
let useVOIP = document.getElementById('useVOIP');
if (useVOIP !== null) 
{
		useVOIP.onclick = function (event) {
			// onUseVOIPClicked(this);
		};
}
// let CustomUISelctionFilter = document.getElementById('CustomUISelctionFilter');
// if (CustomUISelctionFilter !== null) 
// {
		// CustomUISelctionFilter.onclick = function (event) {
			// onCustomUISelctionFilterChange()
		// };
// }
let copyAppLink22 = document.getElementById('copyAppLink');
if (copyAppLink22 !== null) 
{
		copyAppLink22.onclick = function (event) {
			copyAppLink()
		};
}



let copyDSConnectionUrl = document.getElementById('copyDSConnectionUrl');
if (copyDSConnectionUrl !== null) 
{
		copyDSConnectionUrl.onclick = function (event) {
			copyToClipBoardDSConnectionUrl()
		};
}


let copyAppLinkIframeScript222 = document.getElementById('copyAppLinkIframeScript');
if (copyAppLinkIframeScript222 !== null) 
{
		copyAppLinkIframeScript222.onclick = function (event) {
			copyAppLinkIframeScript()
		};
}


let copyHostLink222222 = document.getElementById('copyHostLink');
if (copyHostLink222222 !== null) 
{
		copyHostLink222222.onclick = function (event) {
			copyHostLink()
		};
}


let copyHostLinkIframeScriptsfsf = document.getElementById('copyHostLinkIframeScript');
if (copyHostLinkIframeScriptsfsf !== null) 
{
		copyHostLinkIframeScriptsfsf.onclick = function (event) {
			copyHostLinkIframeScript()
		};
}


let tryHostLink222 = document.getElementById('tryHostLink');
if (tryHostLink222 !== null) 
{
		tryHostLink222.onclick = function (event) {
			tryHostLink()
		};
}


let copyGuestLink222 = document.getElementById('copyGuestLink');
if (copyGuestLink222 !== null) 
{
		copyGuestLink222.onclick = function (event) {
			copyGuestLink()
		};
}


let copyGuestLinkIframeScript222 = document.getElementById('copyGuestLinkIframeScript');
if (copyGuestLinkIframeScript222 !== null) 
{
		copyGuestLinkIframeScript222.onclick = function (event) {
			copyGuestLinkIframeScript()
		};
}


let tryGuestLink222 = document.getElementById('tryGuestLink');
if (tryGuestLink222 !== null) 
{
		tryGuestLink222.onclick = function (event) {
			tryGuestLink()
		};
}


let DeleteSelectedSchedule22 = document.getElementById('DeleteSelectedSchedule');
if (DeleteSelectedSchedule22 !== null) 
{
		DeleteSelectedSchedule22.onclick = function (event) {
			DeleteSelectedSchedule()
		};
}


let GenerateDataTableBtn = document.getElementById('GenerateDataTableBtn');
if (GenerateDataTableBtn !== null) 
{
		GenerateDataTableBtn.onclick = function (event) {
			createTableForDateRangedData()
		};
}

let GenerateDataTableBtn3 = document.getElementById('GenerateDataTableBtn3');
if (GenerateDataTableBtn3 !== null) 
{
		GenerateDataTableBtn3.onclick = function (event) {
			createTableForComulativeDateRangedData()
		};
}

let newAnalyticsBtn = document.getElementById('newAnalyticsBtn');
if (newAnalyticsBtn !== null) 
{//https://data.eagle3dstreaming.com/freeforall/jcl
		newAnalyticsBtn.onclick = function (event) {
			  var url2222 = "https://data.eagle3dstreaming.com/freeforall/"+username
  console.log(`copyAppLink: ` + url2222);

  window.open(
    url2222,
    "_blank"
  );
		};
}



let GenerateDataTableBtn2 = document.getElementById('GenerateDataTableBtn2');
if (GenerateDataTableBtn2 !== null) 
{
		GenerateDataTableBtn2.onclick = function (event) {
			createTableForAllData()
		};
}



/////////////////////////robin-eventHandlerPatch.js
document.getElementById("openNewAnalytics").addEventListener("click", openNewAnalytics);


function openNewAnalytics() {
	
		

  window.open(
    "https://data.eagle3dstreaming.com/",
    "_blank"
  );
}


document.getElementById("tryAppLink").addEventListener("click", tryAppLink);


function tryAppLink() {
	
		 var e = document.getElementById("Apps-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select an App `,{timeout: 2000, color: 'red'});
			
		return
	 }	
	  e = document.getElementById("AppConfig-filter");
	 	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	sysVersion=(document.getElementById("shouldSecureUrl").checked ? 6 : 5) 
  var url2222 = generateSelectedAppLink(sysVersion);
  console.log(`copyAppLink: ` + url2222);

  window.open(
    url2222,
    "_blank"
  );
}


function copyToClipBoardDSConnectionUrl() 
{
	var e = document.getElementById("RunningDedicatedServerMachines-filter");
 if(e.selectedIndex ==-1)
	  {
			e3ds_alert(`No  Ds machine selcted found`,{timeout: 2000, color: 'red'});
			return
	  }
 console.log(" JSON.stringify(e.options[e.selectedIndex].value): "+ JSON.stringify(e.options[e.selectedIndex].value))

 var obj = JSON.parse(e.options[e.selectedIndex].value);
 
 
 console.log("obj.elInfo.serverPublicIp:  "+obj.elInfo.serverPublicIp)
 
 
 
 var e22 = document.getElementById("RunningAppsOnSelctedDSMachine-filter");
  if(e22.selectedIndex ==-1)
	 {
			e3ds_alert(`first select an dedicated server App `,{timeout: 2000, color: 'red'});
			return
	  }

 var obj2 = JSON.parse(e22.options[e22.selectedIndex].value);



var  DSConnectionUrl= obj.elInfo.serverPublicIp+":"+obj2.dsPort
console.log("DSConnectionUrl:  "+DSConnectionUrl)
 
 
 
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = DSConnectionUrl;
  dummy.select();
  dummy.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(dummy);
}



function copyAppLink() {
	
	 var e = document.getElementById("Apps-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select an App `,{timeout: 2000, color: 'red'});
			
		return
	 }	
	  e = document.getElementById("AppConfig-filter");
	 	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
	 
	 
  sysVersion=(document.getElementById("shouldSecureUrl").checked ? 6 : 5)
  var url2222 = generateSelectedAppLink(sysVersion);
  console.log(`copyAppLink: ` + url2222);
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url2222;
  dummy.select();
  dummy.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


function copyAppLinkIframeScript() {
	
	 var e = document.getElementById("Apps-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select an App `,{timeout: 2000, color: 'red'});
			
		return
	 }
	 
	  e = document.getElementById("AppConfig-filter");
	 
	 if(e.selectedIndex== -1)
	 {
		e3ds_alert(`first select a Config`,{timeout: 2000, color: 'red'});
			
		return
	 }	
sysVersion=(document.getElementById("shouldSecureUrl").checked ? 6 : 5)	 
  var url2222 = generateSelectedAppLink(sysVersion);
  console.log(`copyAppLink: ` + url2222);

  var url111 =
    '<iframe  style="visibility: visible;"  id="iframe_1" src="' +
    //AppLink.value
    url2222 +
    '" width="100%" height="100%"   allowfullscreen style="border: none;"></iframe>';

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url111;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  console.log(url111);
}

function tryHostLink() {
  var AppLink = document.getElementById("HostLink");
  window.open(AppLink.value, "_blank");
}

function tryGuestLink() {
  var AppLink = document.getElementById("GuestLink");
  window.open(AppLink.value, "_blank");
}

function copyHostLinkIframeScript() {
  var HostLink = document.getElementById("HostLink");

  var url111 =
    '<iframe  style="visibility: visible;"  id="iframe_1" src="' +
    HostLink.value +
    '" width="100%" height="100%"   allowfullscreen style="border: none;"></iframe>';

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url111;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  console.log(url111);
}

function copyGuestLinkIframeScript() {
  var AppLink = document.getElementById("GuestLink");

  var url111 =
    '<iframe  style="visibility: visible;"  id="iframe_1" src="' +
    AppLink.value +
    '" width="100%" height="100%"   allowfullscreen style="border: none;"></iframe>';

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url111;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  console.log(url111);
}

function copyHostLink() {
  var copyText = document.getElementById("HostLink");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
}

function copyGuestLink() {
  var copyText = document.getElementById("GuestLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
}

function tryHostLink1() {
  generateHostLink();
  var AppLink = lastHostLink;
  window.open(AppLink, "_blank");
}

function tryGuestLink1() {
  var AppLink = lastGuestLink;
  window.open(AppLink, "_blank");
}

function copyHostLinkIframeScript1() {
  generateHostLink();

  var url111 =
    '<iframe  style="visibility: visible;"  id="iframe_1" src="' +
    lastHostLink +
    '" width="100%" height="100%"   allowfullscreen style="border: none;"></iframe>';

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url111;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  console.log(url111);
}

function copyGuestLinkIframeScript1() {
  var url111 =
    '<iframe  style="visibility: visible;"  id="iframe_1" src="' +
    lastGuestLink +
    '" width="100%" height="100%"   allowfullscreen style="border: none;"></iframe>';
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url111;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  console.log(url111);
}

var lastHostLink = undefined;
var lastGuestLink = "first Copy host link";
function generateHostLink() {
  var url2222 = generateSelectedAppLink();
  console.log(`copyAppLink: ` + url2222);

  var meeetingID = uuidv4();

  var ttt = url2222 + "&hostMeetingId=" + meeetingID;
  console.log(ttt);
  lastHostLink = ttt;

  generateGuestLink(meeetingID);
}

function generateGuestLink(meeetingID) {
  var tttt11111 = document.getElementById("isAdminDebugging").checked ? "1" : "0";

  if (!isAdmin) tttt11111 = "0";

  var url111 =
    mmlinkerUrl +
    username +
    "/meeting/156478" +
    "?GuestMeetingId=" +
    meeetingID +
	//"&useVOIP=" +
   // (document.getElementById("useVOIP").checked ? "1" : "0") +
    "&isAdminDebugging=" +
    tttt11111;

  lastGuestLink = url111;
}

function copyHostLink1() {
  generateHostLink();

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = lastHostLink;
  dummy.select();
  dummy.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(dummy);

  return;
  /* Get the text field */
  var copyText = document.getElementById("HostLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
}

function copyGuestLink1() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = lastGuestLink;
  dummy.select();
  dummy.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(dummy);

  return;

  var copyText = document.getElementById("GuestLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

/////////////////////
function createOptionToDSDropDownList(text,value) 
{
	var option = document.createElement("option");
	   option.text = text 
	  option.value =value //.socketid
	  console.log(option.value);
	  
	  return option
}

function updateRunningDedicatedServerMachineslist(msg) {
  var RunningDedicatedServerMachinesfilter = document.getElementById("RunningDedicatedServerMachines-filter");
  if (RunningDedicatedServerMachinesfilter) {
    RunningDedicatedServerMachinesfilter.innerHTML = "";

    for (var i = 0; i < msg.dslunchers.length; i++) 
	{
     

      
	  
	    var sfsgsg = msg.dslunchers[i].elInfo.computerName
						+": "		+msg.dslunchers[i].elInfo.serverPublicIp//msg.domain + ":" + msg.httpsPort;
 
 
 
		
//gsg=msg.dslunchers[i].socketid
     
	   
	  if( isAdmin )
	  {		  
			RunningDedicatedServerMachinesfilter.add(
														createOptionToDSDropDownList(sfsgsg,JSON.stringify(msg.dslunchers[i]))
														, i);
	  }
	 else
	 {
			if(msg.dslunchers[i].elInfo.preAllocateApp_owner== username)
			{
				RunningDedicatedServerMachinesfilter.add(
														createOptionToDSDropDownList(sfsgsg,JSON.stringify(msg.dslunchers[i]))
														, i);
				
				document.getElementById("RunningDedicatedServerMachines-filter").style.display = "block";
			}
			
		}
    }
	
	
	
	OnDSMachineSelected()
  }
  
   updateDSButtons()
}




function askToSendUpdatedAppInfoForSelectedDS(text) 
{

	var dgsgsg = JSON.stringify({
        type: "SendUpdatedAppInfoForSelectedDS",
        
        SelectedDStext: text,
       
      });

      console.log(" ws.send(): " + JSON.stringify(dgsgsg));
      ws.send(dgsgsg);



}	
function OnDSMachineSelected()  
{
  var RunningAppsOnSelctedDSMachine = document.getElementById("RunningAppsOnSelctedDSMachine-filter");
  if (RunningAppsOnSelctedDSMachine) 
  {
    RunningAppsOnSelctedDSMachine.innerHTML = "";

 var e = document.getElementById("RunningDedicatedServerMachines-filter");
 if(e.selectedIndex ==-1)
	 return
 console.log(e.options[e.selectedIndex].value)
      var appInfo = JSON.parse(e.options[e.selectedIndex].value).appInfo;
	 
	 
	 
	 // askToSendUpdatedAppInfoForSelectedDS(e.options[e.selectedIndex].text) 
	 


	 if(
			(appInfo==undefined)
		||
		(appInfo.length<=0)
	  )
	  {
			console.log("no appinfo for this mahcine ")
			return
	  }
      var text22 = e.options[e.selectedIndex].text;
	  

    for (var i = 0; i < appInfo.length; i++) {
     

      var option = document.createElement("option");
	  
	  
      option.text = appInfo[i].appName + ":" +appInfo[i].version+ ":" +appInfo[i].pid + ":" +appInfo[i].dsPort
	  option.value = JSON.stringify(appInfo[i])//.socketid
	  
      RunningAppsOnSelctedDSMachine.add(option, i);
    }
  }
}


function AddToRunningDedicatedServerMachineslist(msg) {
 

  if (!isAdmin && msg.owner != username) return;

var sfsgsg = msg.dsInfo.elInfo.computerName
						+": "		+msg.dsInfo.elInfo.serverPublicIp//msg.domain + ":" + msg.httpsPort;


  var RunningDedicatedServerMachinesfilter = document.getElementById("RunningDedicatedServerMachines-filter");
	if (RunningDedicatedServerMachinesfilter) {
   
	/*   var found = false;
    for (i = 0; i < RunningDedicatedServerMachinesfilter.length; i++) {
      if (RunningDedicatedServerMachinesfilter.options[i].value == sfsgsg) {
        found = true;
      }
    }*/

   // if (!found) {
      var option = document.createElement("option");
	  
	  
	//sfsgsg= msg.dsInfo.socketid

      option.text = sfsgsg;
	   option.value =  JSON.stringify(msg.dsInfo)//.socketid
	    console.log(option.value);
      RunningDedicatedServerMachinesfilter.add(option, RunningDedicatedServerMachinesfilter.length - 1);
      sortSelect(RunningDedicatedServerMachinesfilter);
    //}
  }
  updateDSButtons()
}

function updateDSButtons() 
{
	var RunningDedicatedServerMachinesfilter = document.getElementById("RunningDedicatedServerMachines-filter");

 
		
	if(RunningDedicatedServerMachinesfilter.length>0)
	{
		var StartServerApp = document.getElementById("StartServerApp");

		  if (StartServerApp) 
		  {
			  StartServerApp.disabled=false
		  }
		
	}
	
}


function RemoveFromDedicatedServerControlPanelPlayers(msg) {
  //if(msg.owner!=username)
  //	return
 

  var RunningDedicatedServerMachinesfilter = document.getElementById("RunningDedicatedServerMachines-filter");

  if (RunningDedicatedServerMachinesfilter) {
    for (i = 0; i < RunningDedicatedServerMachinesfilter.length; i++) {
		
		
		 console.log("JSON.stringify(RunningDedicatedServerMachinesfilter.options[i].value): " + 
		 
		 RunningDedicatedServerMachinesfilter.options[i].value
		// JSON.stringify(RunningDedicatedServerMachinesfilter.options[i].value)
		 
		 
		 );
		 console.log("msg.socketid: " + msg.socketid);
      if (
	  JSON.parse(RunningDedicatedServerMachinesfilter.options[i].value).socketid == msg.socketid) {
        RunningDedicatedServerMachinesfilter.remove(i);
      }
    }

    // sortSelect(RunningDedicatedServerMachinesfilter)
  }
  updateDSButtons(msg)
}


/////////////////

function updateDSAppInfoOnCP(msg) {
	
	 var RunningDedicatedServerMachinesfilter = document.getElementById("RunningDedicatedServerMachines-filter");

  if (RunningDedicatedServerMachinesfilter) {
    for (i = 0; i < RunningDedicatedServerMachinesfilter.length; i++) 
	{
		
		
		 console.log("JSON.stringify(RunningDedicatedServerMachinesfilter.options[i].value): " + RunningDedicatedServerMachinesfilter.options[i].value
																				// JSON.stringify(RunningDedicatedServerMachinesfilter.options[i].value)
					);
		 console.log("msg.socketid: " + msg.socketid);
      if (JSON.parse(RunningDedicatedServerMachinesfilter.options[i].value).socketid == msg.dsInfo.socketid) 
	  {
        RunningDedicatedServerMachinesfilter.options[i].value= JSON.stringify(msg.dsInfo)
		OnDSMachineSelected()  
	  }
    }

    // sortSelect(RunningDedicatedServerMachinesfilter)
  }
	updateDSButtons(msg)
}
function AddToRunningMachineslist(msg) {
  //console.log(`isAdmin: ` + isAdmin);

  //if (!isAdmin && msg.owner != username) return;

  var sfsgsg = msg.domain + ":" + msg.httpsPort;
  var RunningMachinesfilter = document.getElementById("RunningMachines-filter");
  if (RunningMachinesfilter) {
    var found = false;
    for (i = 0; i < RunningMachinesfilter.length; i++) {
      if (RunningMachinesfilter.options[i].value == sfsgsg) {
        found = true;
      }
    }

    if (!found) {
      var option = document.createElement("option");
      option.text = option.value = sfsgsg;
      RunningMachinesfilter.add(option, RunningMachinesfilter.length - 1);
      sortSelect(RunningMachinesfilter);
    }
  }
}

function updateRunningMachineslist(msg) {
  var RunningMachinesfilter = document.getElementById("RunningMachines-filter");
  if (RunningMachinesfilter) {
    RunningMachinesfilter.innerHTML = "";

    for (var i = 0; i < msg.RuiningCirrusServers.length; i++) {
      var efsf = msg.RuiningCirrusServers[i];

      var option = document.createElement("option");
      option.text = option.value = efsf.domain + ":" + efsf.httpsPort;
      RunningMachinesfilter.add(option, i);
    }
  }
}

function RemoveFromControlPanelPlayers(msg) {
  //if(msg.owner!=username)
  //	return
  var fsfsf = msg.domain + ":" + msg.httpsPort;

  var RunningMachinesfilter = document.getElementById("RunningMachines-filter");

  if (RunningMachinesfilter) {
    for (i = 0; i < RunningMachinesfilter.length; i++) {
      if (RunningMachinesfilter.options[i].value == fsfsf) {
        RunningMachinesfilter.remove(i);
      }
    }

    // sortSelect(RunningMachinesfilter)
  }
}

function setValue(element, isoString) {
  //const isoString = date.toISOString()
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
var CheckTrailVersionTimer
function CheckTrailVersionForThisUser() 
{
	

	var url ="https://controlpanel.eagle3dstreaming.com/" 
	  +
	  username
	  //"bbb"
	  + "/getUsersinfo"
	  
	 console.log("CheckTrailVersionForThisUser url : ",url);
	 
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.successHappend=false
	xmlHttp.onreadystatechange = 
	function () 
	{
		console.log(xmlHttp.readyState);
		console.log(xmlHttp.status);
		console.log("CheckTrailVersionForThisUser()  xmlHttp.responseText: " + xmlHttp.responseText);

		if (xmlHttp.status == 429) 
		{
			  if (CheckTrailVersionTimer != undefined)
				  clearTimeout(CheckTrailVersionTimer);

			  console.log("11111111111111111setTimeout(CheckTrailVersionTimer, 2000)");
			  CheckTrailVersionTimer = setTimeout(CheckTrailVersionForThisUser, 2000);
			  return;
		}
		
		if (xmlHttp.status == 422) 
		{
			
			return
			
		}

		if (
		  //xmlHttp.readyState == 4 &&

		  xmlHttp.responseText != "" &&
		  xmlHttp.responseText != undefined &&
		  xmlHttp.status == 200
		) 
		{
		  
		  
		  if(xmlHttp.successHappend)
		{
			  console.log("xmlHttp.successHappend already true . so skipping: ");
			return
		}
		xmlHttp.successHappend=true
		console.log("success");
		  clearTimeout(CheckTrailVersionForThisUser);
		 
		 
		       try {
						message = JSON.parse(xmlHttp.responseText);

							var obj=JSON.parse(xmlHttp.responseText)
							var respinse={}
							respinse.userinfo=obj
							onGettingUserInfo (respinse)
							 // if(obj.isTrial== true)
								 
							  document.getElementById("numCCUX").value=obj.maxUserLimit
							  
							  
							  setValue( document.getElementById("SubscriptionStartDateX"), obj.SubscriptionStartDate)
							  setValue( document.getElementById("SubscriptionEndDateX"), obj.SubscriptionEndDate)
							  
							/*var SubscriptionStartDate= new Date(obj.SubscriptionStartDate.slice(0, -1)).toString();
							 SubscriptionStartDate= SubscriptionStartDate.slice(0, -1);
							var SubscriptionEndDate= new Date(obj.SubscriptionEndDate).toString();
							 
							 
							  document.getElementById("SubscriptionStartDate").value=SubscriptionStartDate//.slice(0, -1)//.toISOString()
							  document.getElementById("SubscriptionEndDate").value=SubscriptionEndDate.slice(0, -1)//.toISOString()
							*/
						
					  } 
					  catch (e) 
					  {
						console.log(xmlHttp.responseText);
						onGettingUserInfo (xmlHttp.responseText)
						
					  }
	  
		  
		 
		}
		else 
		{
		  //console.error("getInfo Request not successful", xmlHttp.readyState, xmlHttp.status);
		  //console.error("getInfo xmlHttp.responseText: ", xmlHttp.responseText);
		  if (CheckTrailVersionTimer != undefined) 
			  clearTimeout(CheckTrailVersionTimer);

		  console.log("11111111111111111setTimeout(CheckTrailVersionForThisUser, 2000)");
		  //CheckTrailVersionTimer = setTimeout(CheckTrailVersionForThisUser, 2000);
		}
  };
  xmlHttp.open("GET", url, true); // true for asynchronous

  try 
  {
    xmlHttp.send(null);
  } 
  catch (e) 
  {
    console.log("XXXXXXXXXXXXXXXXXXX CheckTrailVersionForThisUser try catch error : ");
    console.log(e);
  }  
	
}

 
 
 ////////payment 
 
 


function checkSubscriptionStatus(email, domainOfPaymentSystem, version) {
  const url = `https://${domainOfPaymentSystem}/api/${version}/stripe/check-subscription-status`;

  const requestBody = {
    email: email
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  };

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(res => {
      // Handle the response data here
      console.log("pppp checkSubscriptionStatus: ", JSON.stringify(res));
	  
/* 	  {
  "status": "success",
  "data": {
    "numberSubscriptions": 0,
    "customerId": "cus_O4GpkgjWX2Mpac",
    "subscription": null
  }
} */
	if(res.status != "success")
	{
		console.log("pppp checkSubscriptionStatus error : ");
	}

	if(res.data.subscription==null)
	{
		 console.log("pppp No subscription: ");
		 document.getElementById("Payment-label").innerHTML="No subscription."
		 
	}
	else
	{
		 console.log("pppp  subscription found: ",JSON.stringify(res.data.subscription));
	}

	  
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });
}

// Usage:

const email = mail//'ron@eagle3dstreaming.com';
const domainOfPaymentSystem = 'payment-tin-api.eaglepixelstreaming.com';
const version = 'v1';
checkSubscriptionStatus(email, domainOfPaymentSystem, version);


function getCurrentMonthDates() 
{
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
  var firstDay = new Date(year, month - 1, 1); // Setting the day to 1
  var lastDay = new Date(year, month, 0); // Setting day to 0 gives the last day of the previous month

  var formatDate = function(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  };

  var formattedFirstDay = formatDate(firstDay);
  var formattedLastDay = formatDate(lastDay);

  return {
    firstDay: formattedFirstDay,
    lastDay: formattedLastDay
  };
}

// Usage
var monthDates = getCurrentMonthDates();
console.log('First day:', monthDates.firstDay);
console.log('Last day:', monthDates.lastDay);


function getStreamTimeInRangeOf111(username, firstDay, lastDay) 
{
  const url = "https://fb-server.eagle3dstreaming.com/api/v1/data-analytics/individual-streaming?client="
  +username
  +"&end="+firstDay//2023-03-15
  +"&start="+lastDay//2023-03-01";

  const requestBody = {
    email: email
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  };

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(res => {
      // Handle the response data here
      console.log("pppp checkSubscriptionStatus: ", JSON.stringify(res));
	  
/* 	  {
  "status": "success",
  "data": {
    "numberSubscriptions": 0,
    "customerId": "cus_O4GpkgjWX2Mpac",
    "subscription": null
  }
} */
	if(res.status != "success")
	{
		console.log("pppp checkSubscriptionStatus error : ");
	}

	if(res.data.subscription==null)
	{
		 console.log("pppp No subscription: ");
		 document.getElementById("Payment-label").innerHTML="No subscription."
		 
	}
	else
	{
		 console.log("pppp  subscription found: ",JSON.stringify(res.data.subscription));
	}

	  
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    });
}



function formatDate(date) {
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function getCurrentMonthDates() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
  var firstDay = new Date(year, month - 1, 1);
  var lastDay = new Date(year, month, 0);

  var formattedStart = formatDate(firstDay);
  var formattedEnd = formatDate(lastDay);

  return {
    start: formattedStart,
    end: formattedEnd
  };
}

var streamTimeData=undefined
function getStreamTimeInRangeOf() 
{
  var dates = getCurrentMonthDates();
  var apiUrl = "https://fb-server.eagle3dstreaming.com/api/v1/data-analytics/individual-streaming?client="
  +username
  +"&start="
  + dates.start 
  + "&end=" + dates.end;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the API response
      console.log(data);
	  console.log("1111 getStreamTimeInRangeOf data: " + JSON.stringify(data));
      streamTimeData=data
	  document.getElementById("numStreamTime").value = streamTimeData.dataChannelTime;
	  onnumStreamTimeChange() 
	  // Print the data on the browser side
     // var resultContainer = document.getElementById('result-container');
     // resultContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => {
      console.error('Error:', error);
      // Display the error on the browser side
      //var errorContainer = document.getElementById('error-container');
      //errorContainer.innerHTML = 'An error occurred: ' + error;
    });
}

// Usage

