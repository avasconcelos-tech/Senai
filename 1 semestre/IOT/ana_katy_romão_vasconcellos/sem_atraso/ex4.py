from machine import Pin, PWM,ADC
from utime import sleep

led_red = PWM(Pin(16, Pin.OUT))
led_red.freq(1000)
led_green = PWM(Pin(15, Pin.OUT))
led_blue = PWM(Pin(14, Pin.OUT))
potenciometro = ADC(Pin(28))

led_green.duty_u16(0)
led_blue.duty_u16(0)
    
while True:
  valor = potenciometro.read_u16()
  led_red.duty_u16(valor)
  sleep(0.3)