from machine import Pin, PWM, ADC
from utime import sleep

pot = ADC(26)
botao = Pin(16, Pin.IN) 

led_red = PWM(Pin(14, Pin.OUT))
led_red.freq(1000)
led_red.duty_u16(0)

led_green = PWM(Pin(13, Pin.OUT))
led_green.duty_u16(0)

led_blue = PWM(Pin(15, Pin.OUT))
led_blue.freq(1000)
led_blue.duty_u16(0)

botao_on = 0 
botao_off = 0

estado_led_red = False  
estado_led_blue = False

ultimo_estado_botao = 0 

while True:
    estado_atual_botao = botao_on
    estado_atual_botao = botao_off

    intensidade = pot.read_u16()
    
    if estado_atual_botao == 1:
        botao_on = not botao_on
        if botao_on == False:
            intensidade = 0

    if estado_atual_botao == 1 and ultimo_estado_botao == 0:
        botao_off = (botao_off + 1)

    if estado_atual_botao == 1 and ultimo_estado_botao == 0:
        estado_led_red = not estado_led_red
        led_red(estado_led_red)
        print("Sistema Desligado")
        sleep(0.2)
    else:
        print("Sistema Ligado")
        sleep(0.2)   

    leitor = pot.read_u16()
    led_blue.duty_u16(leitor)
    
    led_red.duty_u16(65535 - leitor)

    led_red.duty_u16(intensidade if botao_off == 0 else 0)
    led_blue.duty_u16(intensidade if botao_on == 1 else 0)

    sleep(0.5)


    ultimo_estado_botao = estado_atual_botao
    sleep(0.01)  
