from django.urls import path
from . import views

app_name = "din"
urlpatterns = [
    path('', views.index, name='index'),
    path('ramadan_counter/', views.ramadan_counter, name='ramadan_counter')
]