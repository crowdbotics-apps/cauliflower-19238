from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Location(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )


class Stores(models.Model):
    "Generated Model"
    location = models.ForeignKey(
        "home.Location",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="stores_location",
    )


class Inventory(models.Model):
    "Generated Model"
    item = models.CharField(
        max_length=256,
    )


class Storez(models.Model):
    "Generated Model"
    name = models.ForeignKey(
        "home.Name",
        on_delete=models.CASCADE,
        related_name="storez_name",
    )
    location = models.ForeignKey(
        "home.Lokation",
        on_delete=models.CASCADE,
        related_name="storez_location",
    )
    inventory = models.ForeignKey(
        "home.Inventory",
        on_delete=models.CASCADE,
        related_name="storez_inventory",
    )
    description = models.ForeignKey(
        "home.Description",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="storez_description",
    )
    contact = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )


class Name(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=50,
    )


class Lokation(models.Model):
    "Generated Model"
    address1 = models.CharField(
        max_length=256,
    )
    address2 = models.CharField(
        max_length=256,
    )
    state = models.CharField(
        max_length=5,
    )
    zip = models.IntegerField()


class Description(models.Model):
    "Generated Model"
    description = models.CharField(
        max_length=256,
    )
