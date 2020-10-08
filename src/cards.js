const cards = [
  {
    type: 'intro',
    name: 'Introducing Ghosts',
    desc: `A Ghost is an evil spirit of a dead person that feeds off peoples fear. They are created from violent, sudden deaths. If disturbed they can wreck havoc across neighbourhoods and they have also been known to be up to 1000 years old.\n\n This guide will help you understand what you need to do to surivive.`,
  },
  {
    type: 'intro',
    name: 'Gathering Evidence',
    desc: `Evidence of the supernatural is high in demand which means it can sell. Hunting Ghosts however is an extremely dangerous task.\n\n It will be your job to enter locations and gather as much evidence of the supernatural as possible, just remember, don't outstay your welcome.\n\n In order to discover what type of Ghost you are dealing with you will have to learn each Ghosts strengths and weaknesses.`,
  },
  {
    type: 'intro',
    name: `A Hunter's Sanity`,
    desc: `In your investigation into the supernatural you will need to make sure your Sanity is kept high. All types of Ghosts prey on our Sanity making them stronger the more insane we become.\n\n To Keep you sanity high around the paranormal make sure you stay in lit areas.\n\n The digital clock in the truck shows you how long you have before the Ghost will get angry and lower your sanity faster, use this time to find the Ghost and setup equipment. If your sanity becomes too low the recommended action is to leave.`,
  },
  {
    type: 'ghost',
    name: 'Spirit',
    desc: `A spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.`,
    strength: `Nothing`,
    weakness: `Using Smudge Sticks on a Spirit will stop it attacking for a long period of time.`,
    evidence: `Spirit Box, Fingerprints, and Ghost Writing`,
  },
  {
    type: 'ghost',
    name: 'Wraith',
    desc: `A wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.`,
    strength: `Wraiths almost never touch the ground meaning it can’t be tracked by footsteps.`,
    weakness: `Wraiths have a toxic reaction to Salt.`,
    evidence: `Fingerprints, Freezing Temperatures and Spirit Box.`,
  },
  {
    type: 'ghost',
    name: 'Phantom',
    desc: `A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.`,
    strength: `Looking at a Phantom will considerably drop your sanity.`,
    weakness: `Taking a photo of the Phantom will make it temporarily disappear.`,
    evidence: `EMF Level 5, Ghost Orb and Freezing Temperatures.`,
  },
  {
    type: 'ghost',
    name: 'Poltergeist',
    desc: `One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into it’s victims.`,
    strength: `A Poltergeist can throw huge amounts of objects at once.`,
    weakness: `A Poltergeist is almost ineffective in an empty room.`,
    evidence: `Spirit Box, Fingerprints and Ghost Orb.`,
  },
  {
    type: 'ghost',
    name: 'Banshee',
    desc: `A Banshee is a natural hunter and will attack anything. It has been known to stalk it’s prey one at a time until making it’s kill.`,
    strength: `A Banshee will only target one person at a time.`,
    weakness: `Banshees feat the Crucifix and will be less aggressive when near one.`,
    evidence: `EMF Level 5, Fingerprints and Freezing Temperatures.`,
  },
  {
    type: 'ghost',
    name: 'Jinn',
    desc: `A Jinn is a territorial Ghost that will attack when threatened. It has also been known to be able to travel at significant speed.`,
    strength: `A Jinn will travel at a faster speed if it’s victim is far away.`,
    weakness: `Turning off the locations power source will prevent the Jinn from using it’s ability.`,
    evidence: `Spirit Box, Ghost Orb and EMF Level 5.`,
  },
  {
    type: 'ghost',
    name: 'Mare',
    desc: `A Mare is the source of all nightmares, making it most powerful in the dark.`,
    strength: `A Mare will have an increased chance to attack in the dark.`,
    weakness: `Turning the lights on around the Mare will lower it’s chance to attack.`,
    evidence: `Spirit Box, Ghost Orb and Freezing Temperatures.`,
  },
  {
    type: 'ghost',
    name: 'Revenant',
    desc: `A Revenant is a slow but violent Ghost that will attack indiscriminately. It has been rumored to travel at a significantly high speed when hunting.`,
    strength: `A Revenant will travel at a significantly faster speed when hunting a victim`,
    weakness: `Hiding from the Revenant will cause it to move very slowly.`,
    evidence: `EMF Level 5, Fingerprints and Ghost Writing.`,
  },
  {
    type: 'ghost',
    name: 'Shade',
    desc: `A Shade is known to be a Shy Ghost. There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.`,
    strength: `Being shy means the ghost will be harder to find.`,
    weakness: `The Ghost will not enter hunting mode if there are multiply people nearby.`,
    evidence: `EMF Level 5, Ghost Orb and Ghost Writing.`,
  },
  {
    type: 'ghost',
    name: 'Demon',
    desc: `A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.`,
    strength: `Demons will attack more often than any other Ghost.`,
    weakness: `Asking a Demon successful questions on the Ouija Board won’t lower the users sanity.`,
    evidence: `Spirit Box, Ghost Writing and Freezing Temperatures`,
  },
  {
    type: 'ghost',
    name: 'Yurei',
    desc: `A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.`,
    strength: `Yurei’s have been known to have a stronger effect on people’s sanity.`,
    weakness: `Smudging the Yurei’s room will cause it to not wander around the location for a long time.`,
    evidence: `Ghost Orb, Ghost Writing and Freezing Temperatures.`,
  },
  {
    type: 'ghost',
    name: 'Oni',
    desc: `Oni’s are a cousin to the Demon and possess extreme strength. There have been rumors that they become more active around their prey.`,
    strength: `Oni’s are more active when people are nearby and have been seen moving objects at great speed.`,
    weakness: `Being more active will make the Oni easier to find and identify.`,
    evidence: `EMF Level 5, Spirit Box and Ghost Writing.`,
  },
  {
    type: 'tool',
    name: `Smudging`,
    desc: `This has always been one of the main ways to weaken the more common ghosts. To do this you will need to grab some Smudge Sticks and burn it near the Ghost.`,
  },
  {
    type: 'tool',
    name: `Ouija Board`,
    desc: `The most common way of accidentally summoning a ghost is with a Ouija Board so you may come across these during your investigations. Be careful if you choose to use it as they have been known to lower your sanity. To use one, activate it and then as a question with your voice.`,
  },
  {
    type: 'tool',
    name: `EMF Level 5`,
    desc: `Some Ghosts will leave EMF traces near them that will show up on an EMF Reader as level 5.`,
  },
  {
    type: 'tool',
    name: `Spirit Box`,
    desc: `Only certain ghosts will talk through a Spirit Box when asked a question with you voice. Make sure the lights are off.`,
  },
  {
    type: 'tool',
    name: `Freezing Temperatures`,
    desc: `All ghosts make areas cold however some ghosts have been known to drop temperatures even further.`,
  },
  {
    type: 'tool',
    name: `Fingerprints`,
    desc: `Some Ghosts have been known to leave fingerprints on doors, windows and light switches. This will show up with a UV Light.`,
  },
  {
    type: 'tool',
    name: `Ghost Orb`,
    desc: `The classis paranormal evidence however not all ghosts have one. This will be visible on a camera.`,
  },
  {
    type: 'tool',
    name: `Ghost Writing Book`,
    desc: `Some Ghosts are able to write inside this book if placed nearby. Paranormal investigators started using pen and paper as an alternative form of communication to the Spirit Box. It was later discovered that only certain types of Ghosts will write.`,
  },
  {type: 'evidence'},
];

export default cards;