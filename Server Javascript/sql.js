var exports = module.exports = {};
var sql = require('mssql');


   var config = {
    
    server: "MOBILEAPPDEV1\\MOBILEAPP",
    user: "test",
    password: "test",
    database: "FormCollections",
 
options: {
    encrypt: false
}
}; 
    
exports.config = config;


var insertReferral = function(data) {

    var conn = new sql.Connection(config);
 
        conn.connect().then(function () {

            var req = new sql.Request(conn);
            req.query(`Insert into FormCollections.dbo.Referral (Date,Source,Reason,PPS,Urgent,Redirected,RedirectedReason,Model,MRN,Name) 
            values ('${data.Date}','${data.Source}','${data.Reason}','${data.PPS}','${data.Urgent}','${data.Redirected}','${data.RedirectedReason}','${data.Model}','${data.MRN}','${data.Name}')`).then(function() {
       
            console.log("success");
            conn.close();
            })
            .catch(function (err) {
            console.log(err);
            conn.close();
            });
    
        })
        .catch(function (err) {
        console.log(err); 
        });
};

exports.insertReferral = insertReferral;

var insertDischarge = function(data) {

    var conn = new sql.Connection(config);
 
        conn.connect().then(function () {

            var req = new sql.Request(conn);
            req.query(`Insert into FormCollections.dbo.Discharge (Date,Time,Reason,LocationOfDeath,PreferredLocation,LocationReason,MRN,Name) values
            ('${data.Date}','${data.Time}','${data.Reason}','${data.Location}','${data.Preferred}','${data.LocationReason}','${data.MRN}','${data.name}')`).then(function() {
       
            console.log("success");
            conn.close();
            })
            .catch(function (err) {
            console.log(err);
            conn.close();
            });
    
        })
        .catch(function (err) {
        console.log(err); 
        });
};
 
exports.insertDischarge = insertDischarge;
 
var insertHomeVisit = function(data) {

    var conn = new sql.Connection(config);
 
        conn.connect().then(function () {

            var req = new sql.Request(conn);
            req.query(`Insert into FormCollections.dbo.HomeVisit (Date,StartTime,Type,Urgent,Reason,Participants,Duration,PPS,Impact,MRN,Name) 
            values ('${data.Date}','${data.Time}','${data.Type}','${data.Urgent}','${data.Reason}','${data.Participants}','${data.Duration}','${data.PPS}','${data.Impact}','${data.MRN}','${data.name}')`).then(function() {
       
            console.log("success");
            conn.close();
            })
            .catch(function (err) {
            console.log(err);
            conn.close();
            });
    
        })
        .catch(function (err) {
        console.log(err); 
        });
};

exports.insertHomeVisit = insertHomeVisit;

var insertVisitOutside = function(data) {

    var conn = new sql.Connection(config);
 
        conn.connect().then(function () {

            var req = new sql.Request(conn);
            req.query(`Insert into FormCollections.dbo.HomeVisit (Date,Duration,PPS,Location,Impact,MRN,Name,StartTime) 
            values ('${data.Date}','${data.Duration}','${data.PPS}','${data.Location}','${data.Impact}','${data.MRN}','${data.Name}','${data.StartTime}')`).then(function() {
       
            console.log("success");
            conn.close();
            })
            .catch(function (err) {
            console.log(err);
            conn.close();
            });
    
        })
        .catch(function (err) {
        console.log(err); 
        });
};

exports.insertVisitOutside = insertVisitOutside;


var insertPatientRequests = function(data) {

    var conn = new sql.Connection(config);
 
        conn.connect().then(function () {

            var req = new sql.Request(conn);
            req.query(`Insert into FormCollections.dbo.PatientRequests (PreferredLocation,RequestMade,RequestDate,MRN,Name) 
            values ('${data.PreferredLocation}','${data.RequestMade}','${data.RequestDate}','${data.MRN}','${data.name}')`).then(function() {
       
            console.log("success");
            conn.close();
            })
            .catch(function (err) {
            console.log(err);
            conn.close();
            });
    
        })
        .catch(function (err) {
        console.log(err); 
        });
};
exports.insertPatientRequests = insertPatientRequests;


var insertTelephoneConsult = function(data) {

    var conn = new sql.Connection(config);
 
        conn.connect().then(function () {

            var req = new sql.Request(conn);
            req.query(`Insert into FormCollections.TelephoneConsults (Date,StartTime,Participants,Reason,Duration,PPS,Urgent,Impact,MRN,Name) 
            values ('${data.Date}','${data.StartTime}','${data.Participants}','${data.Reason}','${data.Duration}','${data.PPS}','${data.Urgent}','${data.Impact}','${data.MRN}','${data.Name}')`).then(function() {
       
            console.log("success");
            conn.close();
            })
            .catch(function (err) {
            console.log(err);
            conn.close();
            });
    
        })
        .catch(function (err) {
        console.log(err); 
        });
};

exports.insertTelephoneConsult = insertTelephoneConsult;