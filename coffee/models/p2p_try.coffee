class P2PTry
  
  currentData: null

  initi: () ->
    console.log "LOIOI"
    
    @ctx = new webkitAudioContext()
    
    @source = @ctx.createBufferSource()
    @source.connect(@ctx.destination)
    @source.start(0)

    @peer = new Peer('kekeke', {key: 'sbi86lbw0g1d1jor'})
    @peer.on('connection', (conn) =>
      console.log('got conn.  ')
      conn.on('data', (data) =>
        console.log('got mess ')

        @ctx.decodeAudioData(data, (d) =>
          console.log "decoded" 
          @source.buffer = d
        , (e)=>
            cl "LALAEEE"
            cl e)
      )
    )


window.P2PTry = new P2PTry()
