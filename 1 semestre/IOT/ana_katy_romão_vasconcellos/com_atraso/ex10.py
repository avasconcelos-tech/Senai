from machine import Pin, PWM
from utime import sleep

led_red = PWM(Pin(14, Pin.OUT))
led_red.freq(1000)
led_red.duty_u16(0)

led_blue = PWM(Pin(15,Pin.OUT))
led_blue.freq(1000)
led_blue.duty_u16(0)

led_green = PWM(Pin(16,Pin.OUT))
led_green.freq(1000)
led_green.duty_u16(0)

botao1 = Pin(17, Pin.IN) 
botao2 = Pin(18, Pin.IN)

potenciometro = ADC(28)
    

ultimo_estado_botao1 = 0
ultimo_estado_botao2 = 0

modo_botao1 = 0
modo_botao2 = 0

pisca_estado = False

while True:
    estado_atual_botao1 = botao1.value()
    estado_atual_botao2 = botao2.value()
    
    if estado_atual_botao1 == 1 and ultimo_estado_botao1 == 0:
        modo_botao1 = (modo_botao1 + 1) % 3
        
    if estado_atual_botao2 == 1 and ultimo_estado_botao2 == 0:
        modo_botao2 = (modo_botao2 + 1) % 2
        
    ultimo_estado_botao1 = estado_atual_botao1
    ultimo_estado_botao2 = estado_atual_botao2
    
    intesidade = potenciometro.read_u16()
    
    if modo_botao2 == 1:
        pisca_estado = not pisca_estado
        if pisca_estado == False:
            intensidade = 0
            
    led_red.duty_u16(intensidade if modo_botao1 == 0 else 0)
    led_blue.duty_u16(intensidade if modo_botao1 == 1 else 0)
    led_green.duty_u16(intensidade if modo_botao1 == 2 else 0)
  
    sleep(0.10)
    
 
