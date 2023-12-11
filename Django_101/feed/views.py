from typing import Any
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "Home.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context ['my_thing'] = "Hello world :P this is dynamic"
        return context