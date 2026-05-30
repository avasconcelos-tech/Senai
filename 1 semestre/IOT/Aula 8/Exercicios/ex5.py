from machine import Pin, ADC
from utime import sleep

led_red= machine.Pin(16,Pin.OUT)
ldr= ADC(26)

fator_conversao = 3.3 / (65535)

while True:
    leitura_luz = ldr.read_u16() 
    sleep(2)
    print(leitura_luz)
    if (leitura_luz < 1):
      led_red.value(1)
    else:
        led_red.value(0)
