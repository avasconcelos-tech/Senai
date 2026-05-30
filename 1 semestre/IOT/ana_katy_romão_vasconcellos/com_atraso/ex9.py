from machine import Pin, PWM
from utime import sleep

led_red = PWM(Pin(14, Pin.OUT))
led_red.freq(1000)
led_red.duty_u16(0)

led_blue = PWM(Pin(15,Pin.OUT))
led_blue.freq(1000)
led_blue.duty_u16(0)

potenciometro = ADC(28)

while True:
    leitor = potenciometro.read_u16()
    led_blue.duty_u16(leitor)
    
    led_red.duty_u16(65535 - leitor)
    sleep(0.5)
    