from machine import Pin, ADC
from utime import sleep

led_blue = Pin(15, Pin.OUT)
potenciometro = ADC(Pin(28))

while True:
    valor = potenciometro.read_u16()
    
    delay = (valor / 65535) + 0.05
    
    led_blue.value(1)
    sleep(delay)
    led_blue.value(0)
    sleep(delay)