from machine import Pin, PWM, ADC
from utime import sleep

potenciometro = ADC(28)
led = PWM(Pin(16))   
led.freq(1000)


while True:
    valor= potenciometro.read_u16()
    led.duty_u16(valor) 
    sleep(0.3)
    
    