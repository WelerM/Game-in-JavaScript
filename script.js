
window.addEventListener('DOMContentLoaded', () => {
    var bottom = 50
    let isJumping = false
    let vel = 10
    let dx = 0
    let px = 0
    let py = 0
    var hit = 5
    var interval = 0
    var mountain_frame = 0
    var mountain_function = 0
    var lifePercentage = 100
    var position_pointer = 0
    var cloud_interval = 0
    var enemy_interval = 0
    var level_control = 0
    var num1 = -30
    var classEnemy = 'enemyClass'
    var obj = document.querySelector('.character')
    var boss = document.querySelector('.boss')

    var container = document.querySelector('.game-container')
    var level_2_flag = document.querySelector('.level-2-entry')
    var barbara_end = document.querySelector('.barbara-end')
    var ending_container = document.querySelector('.ending-container')
    var end_screen = document.querySelector('.end-screen')
    var restart = document.querySelector('#restart')

    var next_level_screen = document.querySelector('.next-level')
    var next_level_btn = document.querySelector('.next-level-btn')
    var life_bar = document.querySelector('.life-bar')
    var life_bar_color = document.querySelector('.life-bar-color')
    var map_position_pointer = document.querySelector('.map-position-container')
    var btn_novoJogo = document.querySelector('#start')

    var btn_sobre = document.querySelector('#sobre')
    var sobre_screen = document.querySelector('.sobre-screen')
    var btn_voltar = document.querySelector('.sobre-screen-h1-2')

    var intro_container = document.querySelector('.intro-container')
    var btn_tutorial = document.querySelector('.buttons-tutorial')
    var btn_start = document.querySelector('.tutorial-btn-start')
    var main_h1 = document.querySelector('.main-h1')
    var menu = document.querySelector('.menu-screen')
    var menu_options = document.querySelector('.menu-options')
    const mountains = document.querySelector('.mountains')
    const mountain_position = mountains.offsetLeft
    const map_pointer = document.querySelector('.map-position-pointer')
    var new_game = document.querySelector('#btn-new-game')
    var game_over_screen = document.querySelector('.game-over')
    var enemy_to_remove = document.getElementsByClassName(classEnemy)
    document.addEventListener('keydown', teclaDw)
    document.addEventListener('keyup', teclaUp)

    //=========== INTRO CONTAINER
    var txt_box1 = document.querySelector('.txt-box1')
    var txt_box2 = document.querySelector('.txt-box2')
    var barbara = document.querySelector('.intro-cat2')

    var exclamation = document.querySelector('.exclamation')
    end_screen.style.display = 'none'



    //=================== SOUNDS ====================================
    var jump_sound = new Howl({
        src: ['jump.mp3']
    })
    var main_sound = new Howl({
        src: ['main.mp3']
    });
    var main_sound_interval = 0
    var main_control = 0
    //================== MENU ========================================
    btn_novoJogo.addEventListener('click', () => {
        if (main_control == 0) {
            intro()
        } else {
            startGame()
           
        }
    })
    btn_sobre.addEventListener('click',()=>{
        sobre_screen.style.display='block'
    })
    btn_voltar.addEventListener('click',()=>{
        sobre_screen.style.display='none'
    })

    function intro() {
        intro_container.style.display = 'block'
        main_h1.style.display = 'none'
        menu.style.display = 'none'
        setTimeout(() => {
            txt_box1.style.display = 'block'
            let txt1 = ' -Lorenzo: Eu te amo, Bárbara...'
            let txt2 = ' -Bárbara: Eu também te amo, Lorenzo.'
            let txt3 = ' -Bárbara: Me proteja sempre, por favor.'
            let txt4 = ' -Lorenzo: Eu prometo.'
            let var_content
            let id_var
            let x = 0
            let txt_control1 = 0
            let i = 0
            var stop_txt_box1 = 0
            var stop_txt_box2 = 0
            let current_line
            function intro_txt_box1() {
                if (x == 0) {
                    var_content = txt1
                    id_var = 'line1'
                } else if (x == 1) {
                    var_content = txt2
                    id_var = 'line2'
                } else if (x == 2) {
                    var_content = txt3
                    id_var = 'line3'

                } else if (x == 3) {
                    var_content = txt4
                    id_var = 'line4'
                } else if (x > 3) {
                    txt_control1 = -1
                }
                current_line = document.getElementById(id_var).innerHTML += var_content.charAt(i)
                i++
                stop_txt_box1 = setTimeout(intro_txt_box1, 100)
                if (txt_control1 < 0) {
                    clearTimeout(stop_txt_box1)
                    x = 0
                    i = 0
                    txt_control1 = 0
                    setTimeout(() => {
                        txt_box1.style.display = 'none'
                        exclamation.style.display = 'block'
                        barbara.classList.remove('intro-cat2')
                        barbara.classList.add('barbara-flipped')
                        let num = -250
                        let showBoss = setInterval(() => {
                            num += 5
                            boss.style.right = `${num}px`
                            if (num == 550) {
                                boss.classList.remove('boss')
                                boss.classList.add('boss-flipped')
                                let barbaraMov = 380
                                let unshowBoss = setInterval(() => {
                                    num -= 5
                                    barbaraMov += 5
                                    boss.style.right = `${num}px`
                                    barbara.style.left = `${barbaraMov}px`
                                    barbara.classList.add('barbara-caught')
                                    if (num <= -250) {
                                        clearInterval(unshowBoss)

                                        //New Box text
                                        txt_box2.style.display = 'block'
                                        txt1 = ' -Lorenzo: Bárbara!'
                                        txt2 = ' -Lorenzo: Ela foi levada para DogsLand.'
                                        txt3 = ' -Lorenzo: Um lugar repleto de cães ferozes...'
                                        txt4 = ' -Lorenzo: Não irei te deixar, estou indo atrás de você.'
                                        function intro_txt_box2() {

                                            if (x == 0) {
                                                var_content = txt1
                                                id_var = 'line1_2'
                                            } else if (x == 1) {
                                                var_content = txt2
                                                id_var = 'line2_2'
                                            } else if (x == 2) {
                                                var_content = txt3
                                                id_var = 'line3_2'

                                            } else if (x == 3) {
                                                var_content = txt4
                                                id_var = 'line4_2'
                                            } else if (x > 3) {
                                                txt_control1 = -1
                                            }
                                            current_line = document.getElementById(id_var).innerHTML += var_content.charAt(i)
                                            i++
                                            stop_txt_box2 = setTimeout(intro_txt_box2, 100)
                                            if (txt_control1 < 0) {
                                                clearTimeout(stop_txt_box2)
                                                x = 0
                                                i = 0
                                                txt_control1 = 0
                                                setTimeout(() => {
                                                    btn_tutorial.style.display = 'block'
                                                    let btn_start_animation = setInterval(() => {
                                                        btn_start.classList.toggle('tutorial-btn-start-animation')

                                                    }, 500)
                                                    btn_start.addEventListener('click', () => {
                                                        function startSound(){
                                                            main_sound.play()
                                                            main_sound_interval = setTimeout(startSound, 60000)
                                                        }
                                                        startSound()
                                                        clearInterval(btn_start_animation)
                                                        startGame()
                                                    })
                                                }, 4000)
                                            } else if (i > current_line.length) {
                                                x++
                                                i = 0
                                            }
                                        }
                                        intro_txt_box2()
                                    }
                                }, 20)
                                clearInterval(showBoss)
                            }
                        }, 20)

                    }, 2000)
                } else if (i > current_line.length) {
                    x++
                    i = 0
                }
            }//end of intro_txt_box1 function

            intro_txt_box1()

        }, 2000)
    }

    function startGame() {
        intro_container.style.display = 'none'
        btn_tutorial.style.display = 'none'
        showEnemmy()
        showCloud()
        showMountains()
        /*         main_sound.play()
                setTimeout(() => {
                    main_sound.play()
                    setTimeout(() => {
                        main_sound.play()
                        setTimeout(() => {
                            main_sound.play()
                            setTimeout(() => {
                                main_sound.play()
                                setTimeout(() => {
                                    main_sound.play()
                                }, 60000)
                            }, 60000)
                        }, 60000)
                    }, 60000)
                }, 60000) */
        lifePercentage = 100
        life_bar_color.style.width = `${lifePercentage}%`
        obj.classList.remove('character-jumping')
        menu.style.display = 'none'
        game_over_screen.style.display = 'none'
        interval = setInterval(atualizaFrame, 20)
        life_bar.style.display = 'block'
        map_position_pointer.style.display = 'block'
        obj.style.display = 'block'
        hit = 5
    }


    //===================== SCENARY ELEMENTS  ========================
    function showMountains() {
        const mountains_position1 = mountains.offsetLeft
        let num = mountain_position
        mountains.style.display = 'block'
        mountain_frame = setInterval(() => {//
            num -= 2
            mountains.style.left = `${num}px`
            if (mountains.offsetLeft < container.offsetLeft - 400) {
                clearInterval(mountain_frame)
                mountains.style.display = 'none'
                mountain_function = setTimeout(() => {//
                    mountains.style.right = `${mountains_position1}px`
                    num = mountain_position
                    showMountains()
                }, 5000)
            }
        }, 20)
    }
    function mapPosition() {
        position_pointer += 0.1
        map_pointer.style.left = `${position_pointer}px`

    }


    //==================CHARACTER MOVIMENT ===========================

    function jump() {
        if (isJumping) return
        let intervalUp = setInterval(() => {//going up
            if (bottom > 230) {
                clearInterval(intervalUp)
                intervalDown = setInterval(() => { //going down
                    if (bottom <= 35) {
                        obj.classList.remove('character-jumping')
                        clearInterval(intervalDown)
                        isJumping = false
                    }
                    bottom -= 5
                    obj.style.bottom = `${bottom}px`
                }, 10)
            }
            isJumping = true
            bottom += 30
            obj.style.bottom = `${bottom}px`
        }, 20)
    }
    function teclaDw(e) {
        if (e.key == ' ') {
            jump()
            obj.classList.add('character-jumping')
            jump_sound.play()
        } else if (e.key == 'ArrowLeft') {
            obj.classList.add('character-flipped')
            dx = 0
            dx = -1
        } else if (e.key == 'ArrowRight') {
            obj.classList.remove('character-flipped')
            dx = 0
            dx = 1
        }
    }
    function teclaUp(e) {
        if (e.key == 'ArrowLeft') {
            dx = 0
        } else if (e.key == 'ArrowRight') {
            dx = 0
        }
    }


    //==================== CLOUD ANIMATION ===========================

    function createCloud() {
        var cloud = document.createElement('div')
        cloud.classList.add('cloud')
        //  cloud.classList.toggle('cloud-2')
        container.appendChild(cloud)
    }
    function backgroundControl() {
        cloudTotal = document.getElementsByClassName('cloud')
        for (var x = 0; x < cloudTotal.length; x++) {
            if (cloudTotal[x]) {
                var cloudPosition = cloudTotal[x].offsetLeft
                cloudPosition -= 1
                cloudTotal[x].style.left = `${cloudPosition}px`
                if (cloudPosition < container.offsetLeft) {
                    cloudTotal[x].remove()
                }
            }
        }
    }
    function showCloud() {
        let min = 2, max = 8
        let rand = Math.floor(Math.random() * (max - min + 1) + min)
        createCloud()
        cloud_interval = setTimeout(showCloud, rand * 2000)
    }


    //==================== ENEMY INTERATION ==========================
    function enemyControl() {
        var enemyTotal = document.getElementsByClassName(classEnemy)
        for (let i = 0; i < enemyTotal.length; i++) {
            if (enemyTotal[i]) {
                var enemyPosition = enemyTotal[i].offsetLeft
                enemyPosition -= 5
                enemyTotal[i].style.left = `${enemyPosition}px`
                if (enemyPosition < container.offsetLeft) {
                    enemyTotal[i].remove()
                }
                if (
                    ((obj.offsetTop + 70 >= (enemyTotal[i].offsetTop)) &&//Baixo personagem com cima inimigo
                        ((obj.offsetTop + 110) >= (enemyTotal[i].offsetTop))) &&
                    ((obj.offsetLeft + 100 >= (enemyTotal[i].offsetLeft)) &&//Direita personagem com esquerda inimigo
                        ((obj.offsetLeft) <= (enemyTotal[i].offsetLeft + 100)))//Esquerda personagem com direita inimigo
                ) {
                    lifePercentage -= 20
                    life_bar_color.style.width = `${lifePercentage}%`
                    hit--
                    if (hit == 2) {
                        createBlood()

                    } else if (hit > 0) {//removes rock
                        enemyTotal[i].remove()
                    } else if (hit == 0) {
                        clearInterval(interval)
                        obj.classList.add('character-jumping')
                        game_over_screen.style.display = 'block'
                        clearTimeout(enemy_interval)
                        clearTimeout(cloud_interval)
                    }
                }
            }
        }
    }
    //Shows Enemy calling function below
    function showEnemmy() {
        let min = 2, max = 4
        let rand = Math.floor(Math.random() * (max - min + 1) + min)
        createEnemy()
        enemy_interval = setTimeout(showEnemmy, rand * 800)
    }
    //Creates Enemy
    function createEnemy() {
        var enemy = document.createElement('div')
        if (level_control == 0) {
            enemy.classList.add(classEnemy)
        } else if (level_control == 1) {
            classEnemy = 'enemyClass2'
            enemy.classList.add(classEnemy)
        }
        container.appendChild(enemy)
    }


    //=================== REGENERATION BLOOD ==========================
    function bloodControl() {
        var x = 0
        var blood_i = document.getElementsByClassName('blood-regen')
        for (x = 0; x < blood_i.length; x++) {
            if (blood_i[x]) {
                var position = blood_i[x].offsetLeft
                position -= 10
                blood_i[x].style.left = `${position}px`
                if (
                    ((obj.offsetTop <= (blood_i[x].offsetTop + 60)) &&//Cima personagem com baixo frasco
                        ((obj.offsetTop + 120) >= (blood_i[x].offsetTop))) &&//Baixo personagem com cima frasco
                    ((obj.offsetLeft + 120 >= (blood_i[x].offsetLeft)) &&//Direita personagem com esquerda frasco
                        ((obj.offsetLeft) <= (blood_i[x].offsetLeft + 55)))//Esquerda personagem com direita inimigo
                ) {
                    blood_i[x].remove()
                    life_bar_color.style.width = '100%'
                    lifePercentage = 100
                    hit = 5
                }

                if (blood_i[x].offsetLeft <= container.offsetLeft) {
                    blood_i[x].remove()
                }
            }
        }
    }
    function createBlood() {
        var blood_regen = document.createElement('div')
        blood_regen.classList.add('blood-regen')
        container.appendChild(blood_regen)
    }

    //==================== MAIN FUNCTION ==============================
    function atualizaFrame() {
        py = obj.offsetTop + 50
        px += dx * vel
        obj.style.left = `${px}px`

        if (obj.offsetLeft <= container.offsetLeft) {
            px = -170
        } else if (obj.offsetLeft + 120 >= container.offsetLeft + 1000) {
            px = container.offsetLeft + 680
        }
        enemyControl()
        backgroundControl()
        bloodControl()
        mapPosition()
        //280
        if (position_pointer >= 280) {
            if (main_control == 0) {
                var show_flag = setInterval(() => {
                    num1 ++
                    level_2_flag.style.right = `${num1}px`
                    if (num1 > 60) {
                        clearInterval(show_flag)
                        num1 = 0
                        setTimeout(() => {
                            next_level_screen.style.display = 'block'
                        }, 500)
                    }
                }, 20)
                main_control++
            } else {
                num1 = -90
                var show_barbara = setInterval(() => {
                    num1 += 2
                    barbara_end.style.right = `${num1}px`
                    if (num1 >= 150) {
                        clearInterval(show_barbara)
                        num1 = obj.offsetLeft - 100
                        obj.classList.remove('character-flipped')
                        var stop_lorezndo = setInterval(() => {
                            num1 += 6
                            obj.style.left = num1 + 'px'
                            if (obj.offsetLeft + 130 >= barbara_end.offsetLeft) {
                                clearInterval(stop_lorezndo)
                                obj.classList.toggle('character-jumping')
                                clearTimeout(main_sound_interval)
                                ending()
                            }
                        }, 20)
                        var end_enemy = document.getElementsByClassName(classEnemy)
                        for (let i = 0; i < end_enemy.length; i++) {
                            if (end_enemy[i]) {
                                end_enemy[i].remove()
                            }
                        }

                    }
                    end_enemy = document.getElementsByClassName(classEnemy)
                    for (let i = 0; i < end_enemy.length; i++) {
                        if (end_enemy[i]) {
                            end_enemy[i].remove()
                        }
                    }

                }, 20)
            }
            clearInterval(interval)
            clearInterval(mountain_frame)
            clearTimeout(mountain_function)
            clearInterval(enemy_interval)
        }
    }
    let txt1 = ' -Bárbara: Lorezendo!'
    let txt2 = ' -Bárbara: Você veio até aqui por mim?'
    let txt3 = ' -Lorenzo: Foi o que prometi...'
    let txt4 = ' -Sempre te progeter.'
    let var_content
    let id_var
    let x = 0
    let end_txt_control = 0
    let i = 0
    let current_line = ''
    function ending() {
        ending_container.style.display = 'block'
        if (x == 0) {
            var_content = txt1
            id_var = 'end-line1'
        } else if (x == 1) {
            var_content = txt2
            id_var = 'end-line2'
        } else if (x == 2) {
            var_content = txt3
            id_var = 'end-line3'
        } else if (x == 3) {
            var_content = txt4
            id_var = 'end-line4'
        } else if (x > 3) {
            end_txt_control = -1
        }
        current_line = document.getElementById(id_var).innerHTML += var_content.charAt(i)
        i++
        var stop_ending = setTimeout(ending, 100)
        if (end_txt_control < 0) {
            clearTimeout(stop_ending)
            x = 0
            i = 0
            end_txt_control = 0
            // ========== END ==========//
            setTimeout(() => {
                end_screen.style.display = 'block'
                restart.addEventListener('click', () => {
                    window.location.reload()
                })
            }, 6000)


        } else if (i > current_line.length) {
            x++
            i = 0

        }

    }
    //=================== LEVEL MANAGEMENT ============================
    next_level_btn.addEventListener('click', () => {
        let enemy_to_remove = document.getElementsByClassName(classEnemy)
        var cloud_to_remove = document.getElementsByClassName('cloud')
        for (let i = 0; i < enemy_to_remove.length; i++) {
            if (enemy_to_remove[i]) {
                enemy_to_remove[i].remove()
                enemy_to_remove.length = 0
            }
        }
        enemy_to_remove.length = 0
        for (let i = 0; i < cloud_to_remove.length; i++) {
            if (cloud_to_remove[i]) {
                cloud_to_remove[i].remove()
            }
        }
        level_control++
        if (level_control == 1) {
            level_2()
            next_level_screen.style.display = 'none'
        } else if (level_control == 2) {
            console.log('level 3');
        }
    })


    //==================== GAME RESET =================================
    new_game.addEventListener('click', gameReset)//game over

    function gameReset() {
        menu_options.style.display = 'none'
        position_pointer = 0
        game_over_screen.style.display = 'none'
        menu.style.display = 'block'
        map_pointer.style.left = `${position_pointer}px`
        setTimeout(() => {
            hit = 5
            lifePercentage = 100
            life_bar_color.style.width = `${lifePercentage}%`
        }, 500)
        obj.classList.remove('img-game-over')
        obj.classList.add('character')
        clearInterval(interval)//Clears up main game atualization frame
        clearInterval(mountain_frame)//Clears up any existing scenary mountain
        startGame()

    }


    //==================== LEVEL 2 ====================================
    function level_2() {
        container.classList.add('game-container2')//Changes background to darker
        num1 = 0
        level_2_flag.style.right = -60 + 'px'//Hides flag again
        position_pointer = 0//Resets map pointer
        map_pointer.style.left = `${position_pointer}px`//Resets map pointer
        hit = 5
        obj.classList.remove('img-game-over')
        obj.classList.add('character')
        clearInterval(interval)//Clears up main game atualization frame
        clearInterval(mountain_frame)//Clears up any existing scenary mountain
        clearInterval(enemy_interval)
        obj.style.offsetLeft = 200
        let enemy_to_remove = document.getElementsByClassName(classEnemy)
        var cloud_to_remove = document.getElementsByClassName('cloud')
        for (let i = 0; i < enemy_to_remove.length; i++) {
            if (enemy_to_remove[i]) {
                enemy_to_remove[i].remove()
                enemy_to_remove.length = 0
            }
        }
        enemy_to_remove.length = 0
        for (let i = 0; i < cloud_to_remove.length; i++) {
            if (cloud_to_remove[i]) {
                cloud_to_remove[i].remove()
            }
        }
        startGame()



    }


})


