from django.urls import path
from .views import HomePageView

app_name = 'feed'

urlpatterns = [
    path('index/', HomePageView.as_view(), name='index'),
]