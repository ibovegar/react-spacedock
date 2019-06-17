export default {
  cygf35: {
    engine: [], // many dependencies -> NO UPGRADE
    stabilizer: ['GXX_L-Wing-A001', 'GXX_L-Wing-A002'], // OK
    weapons: ['GXX_L-Prop-A001', 'GXX_L-Prop-A002'], // OK
    deflector: ['GXX_L-Prop-E001', 'GXX_L-Prop-E002'], // OK
    plating: ['GXX_L-LaserX003', 'GXX_L-LaserX004'] // depends on deflector -> NO UPGRADE
  },
  drax22: {
    engine: ['GXX_L-Prop-B001', 'GXX_L-Prop-B002'], // OK
    stabilizer: ['GXX_L-Wing-B001', 'GXX_L-Wing-B002'], // OK
    weapons: ['GXX_L-Prop-F001', 'GXX_L-Prop-F002'], // OK
    deflector: ['GXX_L-M-Launcher001', 'GXX_L-M-Launcher002'], // depends on deflector -> NO UPGRADE
    plating: []
  },
  tellrx5: {
    engine: ['GXX_L-Prop-A003', 'GXX_L-Prop-A004'], // OK
    stabilizer: [
      'GXX_L-Wing-C001',
      'GXX_L-Wing-C002',
      'GXX_L-Prop-E003',
      'GXX_L-Prop-E004'
    ], // OK
    weapons: ['GXX_L-Laser-Ion001', 'GXX_L-Laser-Ion002'], // OK
    deflector: [], // NO UPGRADE
    plating: [] // (Prop-E003/4) NO UPGRADE -> moved to stabilizer due to dependency
  },
  hamm2: {
    engine: [], // many dependencies -> no upgrade
    stabilizer: ['GXX_L-Wing-D001', 'GXX_L-Wing-D002'], // OK
    weapons: ['GXX_L-LaserX005', 'GXX_L-LaserX006'], // OK
    deflector: ['GXX_L-Prop-B003', 'GXX_L-Prop-B004'], // OK
    plating: [] // no upgrade
  },
  vanguard: {
    engine: ['GXX_L-Prop-D001', 'GXX_L-Prop-D002'], // OK
    stabilizer: ['GXX_L-Wing-A005', 'GXX_L-Wing-A007'], // OK
    weapons: ['GXX_L-LaserX007', 'GXX_L-LaserX008'], // OK
    deflector: [], // NO UPGRADE
    plating: [
      'GXX_L-Rack001',
      'GXX_L-Rack002',
      'GXX_L-MissileB001',
      'GXX_L-MissileB002',
      'GXX_L-MissileA001',
      'GXX_L-MissileA002'
    ]
  }
};
