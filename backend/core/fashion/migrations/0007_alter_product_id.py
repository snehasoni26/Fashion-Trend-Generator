# Generated by Django 5.0.7 on 2024-07-15 08:12

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fashion', '0006_alter_product_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
