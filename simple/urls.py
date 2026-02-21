from django.urls import path
from . import views

app_name = "simple"
urlpatterns = [
    path('', views.index, name='index'),
    path('calculator/', views.calculator, name='calculator')
]