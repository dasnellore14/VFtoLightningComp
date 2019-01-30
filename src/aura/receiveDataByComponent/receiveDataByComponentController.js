({
	doInit : function(component, event, helper) {
        
        var vfOrigin = 'https://' + component.get(' v.baseDomain ');
        window.addEventListener("message", function(event){
            if(event.origin !== vfOrigin){
                
                return;
            }
            console.log(' 💥 ' + event.data);
            component.set( 'v.receivedData', event.data);
        }, false);
	}
})