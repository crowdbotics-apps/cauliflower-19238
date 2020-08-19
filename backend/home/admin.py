from django.contrib import admin
from .models import Description, Inventory, Location, Lokation, Name, Stores, Storez

admin.site.register(Location)
admin.site.register(Stores)
admin.site.register(Inventory)
admin.site.register(Storez)
admin.site.register(Name)
admin.site.register(Lokation)
admin.site.register(Description)

# Register your models here.
