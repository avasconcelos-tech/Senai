from machine import Pin, PWM, ADC
from utime import sleep

led_red = PWM(Pin(16, Pin.OUT))
led_red.freq(1000)
led_green = PWM(Pin(15, Pin.OUT))
led_green.freq(1000)
led_blue = PWM(Pin(14, Pin.OUT))
led_blue.freq(1000)
potenciometro = ADC(Pin(28))
botao = Pin(18, Pin.IN, Pin.PULL_DOWN)

clique_botao = 0
    
while True:
    if botao.value() == 1:
        clique_botao += 1
        if clique_botao > 2:
            clique_botao = 0
            
            while botao.value() ==1:
                sleep(1)
                
    luz = potenciometro.read_u16()
    
    if clique_botao == 0:
        led_red.duty_u16(luz)
        led_green.duty_u16(0)
        led_blue.duty_u16(0)
    elif clique_botao == 1:
        led_red.duty_u16(0)
        led_green.duty_u16(luz)
        led_blue.duty_u16(0)
    elif clique_botao == 2:
        led_red.duty_u16(0)
        led_green.duty_u16(0)
        led_blue.duty_u16(luz)
    
    sleep(0.5)
        
        
        
        
        