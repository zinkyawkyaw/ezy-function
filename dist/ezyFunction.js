const moment = require('moment');
const app  = {};

app.comma = (val)=>{
    nStr = app.str2number(val);
	nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

app.str2number = (val)=> {
	val  = val+'';
	return parseFloat(val.replace( /[^\d\.\-]/g, ""));
}


app.round = (val,decimals) =>{ 
	var y = app.str2number(val);
		y = (Math.abs(y) > 0.000000001)?y:0;
		if( decimals === 0 ){
			decimals = 0;
		}else{
			decimals = (decimals)?decimals:2;
		}
	var d = decimals*1+8;
		d = (d > 12)?12:d;
		y = Number(Math.round((y).toFixed(d)+'e'+d)+'e-'+d).toFixed(d);
		res = Number(Math.round((y+"").replace(/[^0-9.-]/g,'')+'e'+decimals)+'e-'+decimals).toFixed(decimals); 
	return app.str2number(res);
};

app.isMail = (mail)=> {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
	if(!mail.match(emailReg)){
		return false
	} 
	else return true;      
}

app.formatDate = (date , format ='DD-MMM-YYYY' , origin = 'YYYY-MM-DD' )=> {
    var m = moment(date, origin);
    return (m.isValid())? moment(date, origin)
    .format(format):'';
}

app.objectLength = (obj)=> {
    return Object.keys(obj).length
}

app.findIndex = (array , [key , value] )=>{
    return array.findIndex(x => x[key] == value );
}

module.exports = app;