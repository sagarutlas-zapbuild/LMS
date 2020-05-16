from django.urls import include, path
from rest_framework.routers import DefaultRouter


from .views import CourseViewset 

router = DefaultRouter()
router.register(r'courses', CourseViewset, basename='Course')

urlpatterns = [path('', include(router.urls)), ]
