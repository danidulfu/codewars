function mediate(source, message) {
    let pred={'hesitate':'I\'m here to help if you have a message you\'d like to send.',
              'shout':`I'm having trouble understanding you when you shout. Could you please say it again more calmly?`,
              'none':`I'm here to help if you have a message you'd like to send.`,
              'personal':'I appreciate you sharing that. Now, is there a message related to that you want me to pass on?'}
    let resp={'Mr. Wong':'Mr. Wright',
             'Mr. Wright':'Mr. Wong'}
    let pass=message.substring(message.indexOf('"')+1,message.lastIndexOf('"'))
    if ((message.toLowerCase().indexOf('uhmm ..')!=-1)||(message.toLowerCase().indexOf('.. uhmm')!=-1)||message.toLowerCase().indexOf('uhmm,')!=-1)
      return [source, pred['hesitate']]
    if (pass.length==0) return [source, pred["personal"]]
      else if (pass.toUpperCase()==pass) return [source,pred['shout']]
        else  return [resp[source], `${source} says: "${pass}".`];
  }