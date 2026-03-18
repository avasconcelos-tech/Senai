from machine import Pin, PWM, ADC
from utime import sleep

led_blue = PWM(Pin(15, Pin.OUT))
potenciometro = ADC(Pin(28))

while True:
    valor = potenciometro.red_u16()
    
    delay = (valor / 65535) + 0.5 #Mapeia o valor para um tempo de espera em segundos
    
    led.toggle() #Inverte o estado do LED
    