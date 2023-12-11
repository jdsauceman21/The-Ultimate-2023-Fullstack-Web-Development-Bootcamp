from typing import Any
from django.views.generic import TemplateView
from .models import Post


class HomePageView(TemplateView):
    template_name = "Home.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context ['posts'] = Post.objects.all()
        return context